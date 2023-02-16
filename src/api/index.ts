import axios from 'axios';

const domain = 'https://jsonplaceholder.typicode.com/todos';

export async function getListTodo(params: any) {
  try {
    const data = await axios.get(domain, params);

    return data;
  } catch (error) {
    console.log(error);
  }
}
