import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Nkayi Lovette',
    email: 'nkayilovette03@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Nkimih Loveline',
    email: 'nkimihloveline@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Abuwoh Ferdinand',
    email: 'abuwohferdinand@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
