import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint("http://localhost:5000/v1").setProject("readme-maker");

export const account = new Account(client);
export const database = new Databases(client, "63e9f478a3e74166e402");
