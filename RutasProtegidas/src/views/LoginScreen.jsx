import React from 'react'

const LoginScreen = () => {
  return (
    <div>
        <form>
            <div>
                <label> Email</label>
                <input type="email" />
            </div>
            <div>
                <label >Password</label>
                <input type="password" />
            </div>
            <button>Enviar</button>
            
            
        </form>
    </div>
  )
}

export default LoginScreen