import formatAccount from "@renderer/utils/formatAccount"
import { useState } from "react"

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
          <input type="text" placeholder="请输入账号 手机/邮箱/用户名" onChange={formatLoginAccount} value={account}/>
        </label>
      </div>
    </div>
  )
}

export default Login
