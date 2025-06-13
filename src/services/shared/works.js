import works from './../../assets/works.json';

export function findWork(name) {
  return works.find((item) => {
    return item.name == name;
  });
}
