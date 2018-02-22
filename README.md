This is a minimal redux app.
It has four 'users' and one 'selectedUser' which changes when list is clicked.
Includes redux dev-tools wrapper

index.js has the dev-tools wrapper and the store wrapper
containers folder has the 'connected' components
reducers folder has 2 reducers: one sets the list of users, the other changes the selected user when it receives the SELECT_USER action
actions folder has our single action to change the selected user

This folder has a setup for:

webpack
webpack-dev-server
react
react-dom
react-router
babel (es2015 + react)
eslint (rally-coding + with some global exclusions)
redux
react-redux

React Router is not actually being used.
NB react-router-dom webpack config:

output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
*    publicPath: '/'
  },
  devServer: {
*    historyApiFallback: true,
    contentBase: './dist'
  },
