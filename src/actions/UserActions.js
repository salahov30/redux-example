export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function handleLogin() {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Auth.login(r => {
      if (r.session) {
        let username = r.session.user.first_name
        let avatar = r.session
        console.log(avatar)

        dispatch({
          type: LOGIN_SUCCESS,
          payload: username,
        })
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4)
  }
}
