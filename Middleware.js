
async function fetchDataMiddleware() {
  const apiUrl = 'https://intent-kit-16.hasura.app/api/rest/blogs';
  const adminSecret = '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6';

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-hasura-admin-secret': adminSecret,
      },
    });
    if (response.status != 200) {
      throw new Error(`Error Occured due to ${response.statusText}`);
    }

    const responseData = await response.json();
    return { status: 200, Data: responseData.blogs };
  } catch (error) {
    return ({ status: 401, Data: `Error fetching data: ${error.message}` });
  }
}

module.exports = { fetchDataMiddleware }