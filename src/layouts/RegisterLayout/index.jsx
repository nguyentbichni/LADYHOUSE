import { Route, Redirect } from 'react-router-dom';

function RegisterLayout(props){
  const { exact, path, component: Component, ...other } = props;
  
  return (
    <Route
      exact = {exact}
      path = {path}
      render = {(routerProps) => {
        return <Component {...other} {...routerProps} />
      }}
    />
  )
}
export default RegisterLayout;