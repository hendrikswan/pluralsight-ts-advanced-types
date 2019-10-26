import { Project, Size } from "./types";

class ApiClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getProjects(): Promise<Project[]> {
    return Promise.resolve([]);
  }

  saveProject(): Promise<string> {
    return Promise.resolve("1");
  }

  deleteProject(): Promise<void> {
    return Promise.resolve();
  }

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
    return Promise.resolve(10);
  }
}

const api = new ApiClient("http://pluralsight.com");
