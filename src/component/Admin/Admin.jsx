export const PrintHello = () => {
  return "hello user";
};

export const PrintGoodMorning = (name) => {
  return `good morning ${name}`;
};
export const PrintWhenOver18 = (age, name) => {
  if (age > 18) {
    return `good morning ${name}`;
  }
};

export const PrintGoodNight=()=>{
    return(<h1>good night</h1>)
}

export const PrintEmail=(email)=>{
    return(<a href={email}></a>)
}

const ObjCheck=(obj)=>{

}
const Admin = () => {
  return <div></div>;
};
export default Admin;
