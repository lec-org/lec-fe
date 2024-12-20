import { useEffect, useState } from "react"
import styles from './home.module.css'
import { motion } from "framer-motion";
import { Button, Card } from "@nextui-org/react";
import clsx from "clsx";
export default function Home() {
  const [isClockedIn, setIsClockedIn] = useState<boolean>(false)
  const [personalStats] = useState({
    totalHours: 160,
    avgDuration: 8.5,
    streak: 5,
    weeklyTarget: 28, // 本周目标工时
    currentWeeklyHours: 16 // 当前已完成工时
  });
  const [currentClockTime, setCurrentClockTime] = useState<string>('');
  const [currentDuration, setCurrentDuration] = useState<number>(0);
  const [clockTimer, setClockTimer] = useState<NodeJS.Timeout | null>(null);

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const handleClock = () => {
    if (!isClockedIn) {
      // 打卡
      const now = new Date();
      setCurrentClockTime(formatTime(now));
      const timer = setInterval(() => {
        setCurrentDuration(prev => prev + 1);
      }, 1000);
      setClockTimer(timer);
    } else {
      // 下卡
      if (clockTimer) {
        clearInterval(clockTimer);
        setClockTimer(null);
      }
      setCurrentClockTime('');
      setCurrentDuration(0);
    }
    setIsClockedIn(!isClockedIn);
  };

  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    return () => {
      if (clockTimer) {
        clearInterval(clockTimer);
      }
    };
  }, [clockTimer]);

  return (
    <div className={styles['home-page']}>
      <div className={styles['left-content']}>
        <motion.div
         initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles['left-framer']}
          >
          <Card className={styles['clock-card']}>
            <h2 className={styles['clock-title']}>打卡控制</h2>
            <div className={styles['clock-btn-group']}>
              <Button
                color={isClockedIn ? "danger" : "primary"}
                onClick={handleClock}
                className={clsx(styles['clock-btn'], isClockedIn ? styles['clock-btn-online'] : styles['clock-btn-offline'])}
              >
                {isClockedIn ? '下卡' : '打卡'}
              </Button>
              {isClockedIn && (
                <>
                  <div className="flex-1 text-center">
                    <div className="text-white/60 text-sm mb-1">打卡时间</div>
                    <div className="text-white font-medium">{currentClockTime}</div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-white/60 text-sm mb-1">打卡时长</div>
                    <div className="text-white font-medium">{formatDuration(currentDuration)}</div>
                  </div>
                </>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
