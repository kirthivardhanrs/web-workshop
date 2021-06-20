import {User} from "@/types/user";
import {Repo} from "@/types/repo";

export async function getUser(groupid: string): Promise<User> {
  return await (await fetch(
    "https://gitlab.com/api/v4/groups/" + groupid)).json();
}

export async function getRepos(groupid: string): Promise<Repo[]> {
  return await (await fetch(
    `https://gitlab.com/api/v4/groups/${groupid}/projects`)).json();
}
