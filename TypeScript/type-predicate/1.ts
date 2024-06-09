type SuccessResponse<T> = {
  status: "success";
  data: T;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

function isSuccessResponse<T>(response: ApiResponse<T>){
  return response.status === "success";
}

function handleResponse<T>(response: ApiResponse<T>) {
  if (isSuccessResponse(response)) {
    console.log("Data:", response.data);
  } else {
    console.log("Error:", response.message);
  }
}

const response: ApiResponse<string> = { status: "success", data: "result" };
handleResponse(response);
