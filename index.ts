import { ids } from "./ids";

const formattedDataApiUrls: string[] = [];

const formattedFrontendUrls: string[] = [];

type Uri = "dataApi" | "frontend";

async function run(type: Uri) {
  switch (type) {
    case "dataApi":
      for (const id of ids) {
        const formattedUrl = `https://data.explore-education-statistics.service.gov.uk/api/permalink/${id}`;
        formattedDataApiUrls.push(formattedUrl);
      }

      console.log(formattedDataApiUrls);
      break;
    case "frontend":
      for (const id of ids) {
        const formattedUrl = `https://explore-education-statistics.service.gov.uk/data-tables/permalink/${id}`;
        formattedFrontendUrls.push(formattedUrl);
      }

      console.log(formattedFrontendUrls);
      break;

    default:
      throw new Error("Invalid type");
  }
}
run("dataApi");
run("frontend");
