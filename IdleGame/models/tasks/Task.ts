export default interface Task {
    name: string;
    duration: number;
    completion: ()=>void;
}