type SuccessResponse<T> = {
  status: "success";
  data: T;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

function handleResponse<T>(response: ApiResponse<T>) {
  if (response.status === "success") {
    console.log("Data:", response.data);
  } else {
    console.log("Error:", response.message);
  }
}

function isSuccessResponse<T>(response: ApiResponse<T>) {
  return response.status === "success";
}

function handleResponse2<T>(response: ApiResponse<T>) {
  if (isSuccessResponse(response)) {
    console.log("Data:", response.data);
  } else {
    console.log("Error:", response.message);
  }
}
