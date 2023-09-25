import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/repos/robinsonclo1/react-practice/contents';

export async function GitHubFetch(filePath) {
  const url = `${GITHUB_API_URL}${filePath}`;
  try {
    const response = await axios.get(url, {
      headers: {
        'Accept': 'application/vnd.github.v3.raw'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching file content from GitHub:', error);
    return null;
  }
}
