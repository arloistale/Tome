import { Aphorism } from "./aphorism";

const mockData: Aphorism[] = [
    { id: '1', createdAt: new Date(), title: "Mock 1", content: "Hello my name is Mock." },
    { id: '2', createdAt: new Date(), title: "Mock 2", content: "Hello my name is Mock 2." }
]

// A mock function to mimic making an async request for data
export function fetchAphorisms() {
    return new Promise<{data: Aphorism[]}>((resolve) =>
      setTimeout(() => resolve({ data: mockData }), 1000)
    );
  }