import {getRepos, getUser} from "@/api/api";

async function main(): Promise<string> {
  const groupid = "5864375";
  const group = await getUser(groupid);
  const repos = await getRepos(groupid);
  const repoNames = repos.map(repo => repo.name)
    .join(", ");
  return repoNames;
}

export default {
  main
};
