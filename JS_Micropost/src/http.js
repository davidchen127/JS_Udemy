class EasyHttp {
  // make an HTTP GET request
  async get(url) {
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  }

  // make an HTTP POST request
  async post(url, input) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    const resData = await res.json();
    return resData;
  }

  // make an HTTP PUT request
  async put(url, updatedInfo) {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedInfo),
    });

    const resData = await res.json();
    return resData;
  }

  // make an HTTP DELETE request
  async delete(url) {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const resData = await 'data deleted';
    return resData;
  }
}

export const http = new EasyHttp();
