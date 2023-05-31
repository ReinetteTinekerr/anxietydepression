import firebase from 'firebase/app';
import 'firebase/firestore';
import { IUser } from "./IUser";


export interface IResponse {
    id: string;
    bai: number;
    bdi: number;
    comment: string;
    createdAt: any;
    scoreClf?: string;
    commentClf?: string;
    user: IUser;
}