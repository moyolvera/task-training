import axios from 'axios';
import ApiRouteMap from '../constants/ApiRouteMap';

export default class TodosService {
  public getAllTodos = async <T>() => {
    try {
      const response = await axios.get<T>(ApiRouteMap.GET_ALL);
      return { status: true, response: response.data };
    } catch (error) {
      return { status: false, response: undefined };
    }
  };
}
