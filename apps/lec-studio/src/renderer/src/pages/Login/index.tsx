import formatAccount from "@renderer/utils/formatAccount"
import { useState } from "react"
import {Input} from '@lec/design'
const Login = () => {
  const [account, setAccount] = useState<string>("")
  const formatLoginAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedAccount = formatAccount(event.target.value as string)
    setAccount(formattedAccount)
  }
  return (
    <div className="login-view">
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="ipt-container">
        <label className="account">
          <span>Account</span>
          <Input value={account} onChange={formatLoginAccount} placeholder="请输入账号 手机/邮箱/用户名"/>
        </label>
      </div>
    </div>
  )
}

export default Login
