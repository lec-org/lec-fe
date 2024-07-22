const Login = () => {
  return (
    <div className="login-view">
      <div className="img">
        <img src="" alt="" />
      </div>
      <div className="ipt-area">
        <form>
          <label htmlFor="account">手机/邮箱/用户名</label>
          <input type="text" id="account" name="account" />
          <label htmlFor="password">密码</label>
          <input type="password" id="password" name="password" />
          <button type="submit">登录</button>
        </form>
      </div>
    </div>
  )
}

export default Login
