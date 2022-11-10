interface User {
  id: string,
  name: string,
  mail: string,
  active: boolean,
  role: string,
}

interface UserMutation {
  name: string,
  mail: string,
  active: boolean,
  role: string,
}