import { http } from '../../../shared/utils/http';

export interface CreateUserDto {
  name: string;
  email: string;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
}

export const createUser = async (
  dto: CreateUserDto
): Promise<UserResponse> => {
  const response = await http.post('/admin/users', dto);

  const data = response.data;

  return {
    id: data.id,
    name: data.name,
    email: data.email,
  };
};

export const getUserById = async (id: string): Promise<UserResponse> => {
  const response = await http.get(`/admin/users/${id}`);
  const data = response.data;

  return {
    id: data.id,
    name: data.name,
    email: data.email,
  };
};