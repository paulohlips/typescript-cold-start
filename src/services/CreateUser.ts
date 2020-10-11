/**
 * Usuário: name, email, password
 */

// interfaces => definem formato/tipos de bojetos

interface TechObj {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs?: Array<string | TechObj> /*'string[]*/;
}

export default function createuser({
  name = "",
  email,
  password,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
