const path = require('path')
const remote = require('screeps-remote')

remote({
  // required
  username: 'hulu@example.com', // MUST change (or use the SCREEPS_USERNAME envvar)
  password: 'password', // MUST change (or use the SCREEPS_PASSWORD envvar)
  server_url :"http://1.2.3.4:21025",  //MUST change (your private server host and port)
  // optional
  // src: path.resolve(__dirname, './src'), // defaults to the working directory if not specified (or use the SCREEPS_SOURCE envvar)
  branch: 'default', // defaults to "default" if not provided (or use the SCREEPS_BRANCH envvar)
  ptr: false // defaults to `false` if not provided (or use the SCREEPS_PTR envvar)
})