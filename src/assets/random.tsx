import testLibrary from "../../public/test.json";

export interface TestInterface {
  users: {
    userid: number;
    firstname: string;
  }[];
}

const randomNumber = (archive: TestInterface) => {
  return archive;
};

const result = randomNumber(testLibrary);

console.log(result);

export default { result };
