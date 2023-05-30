import firebase from 'firebase/app';
import 'firebase/firestore';
import { IUser } from "./IUser";


export interface IResponse  {
    bai: number;
    bdi: number;
    comment: string;
    createdAt: any;
    user: IUser;
}