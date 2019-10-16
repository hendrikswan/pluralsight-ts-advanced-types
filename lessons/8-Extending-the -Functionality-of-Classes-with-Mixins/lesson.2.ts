import { Project, Size } from "./types";

export class CoreAPI {
  constructor(public baseUrl: string) {}
}

export type BaseAPIConstructor = new (...args: any[]) => CoreAPI;

function ImagesAPI<TBase extends BaseAPIConstructor>(Base: TBase) {
  return class extends Base {
    getImages(): Promise<{
      src: string;
      dimensions: Size;
    }> {
      return Promise.resolve({
        src: "http://a-fake-url.com/image-id",
        dimensions: {
          height: 100,
          width: 300
        }
      });
    }

    saveImage(src: string): Promise<number> {
      console.log(this.baseUrl);
      return Promise.resolve(10);
    }
  };
}

function ProjectsAPI<TBase extends BaseAPIConstructor>(Base: TBase) {
  return class extends Base {
    getProjects(): Promise<Project[]> {
      return Promise.resolve([]);
    }

    saveProject(): Promise<string> {
      return Promise.resolve("1");
    }

    deleteProject(): Promise<void> {
      return Promise.resolve();
    }
  };
}

class ApiClient extends ProjectsAPI(ImagesAPI(CoreAPI)) {}

const api = new ApiClient("http://pluralsight.com");
