export const docsItems = [
  {
    path: "/docs",
    name: "Introduction",
    type: "started",
  },
  {
    path: "/docs/installation",
    name: "Installation",
    type: "started",
  },
  {
    path: "/docs/changelog",
    name: "Changelog",
    type: "started",
  },
  {
    path: "/docs/nextjs",
    name: "Next.js",
    type: "installation",
  },
  {
    path: "/docs/vite",
    name: "Vite",
    type: "installation",
  },
  {
    path: "/docs/javascript",
    name: "javascript",
    type: "installation",
  },
  {
    path: "/docs/uploadimage",
    name: "uploadOnMyimager()",
    type: "function",
  },
  {
    path: "/docs/uploadimageandgeturl",
    name: "uploadOnMyimagerAndGetUrl()",
    type: "function",
  },
  {
    path: "/docs/uploadimage",
    name: "uploadOnMyimager()",
    type: "function",
  },
  {
    path: "/docs/uploadimageandgeturl",
    name: "uploadOnMyimagerAndGetUrl()",
    type: "function",
  },
  {
    path: "/docs/uploadimage",
    name: "uploadOnMyimager()",
    type: "function",
  },
  {
    path: "/docs/uploadimageandgeturl",
    name: "uploadOnMyimagerAndGetUrl()",
    type: "function",
  },
  {
    path: "/docs/uploadimage",
    name: "uploadOnMyimager()",
    type: "function",
  },
  {
    path: "/docs/uploadimageandgeturl",
    name: "uploadOnMyimagerAndGetUrl()",
    type: "function",
  },
];

export const javascriptDocs = `
<script>
    const fileInput = document.getElementById('fileInput');
    const fileDetails = document.getElementById('fileDetails');
    const fileName = document.getElementById('fileName');
    const fileSize = document.getElementById('fileSize');

    // Replace with actual MyImager client key and project key
    const MyImager_Client_Key = 'your_client_key_here';
    const Project_Key = 'your_project_key_here';

    fileInput.addEventListener('change', function(event) {
      const fileInput = event.target.files[0];

      if (fileInput) {
        // Update file details
        fileName.textContent = File Selected: "$"{fileInput.name};
        fileSize.textContent = Size: "$"{Math.round(fileInput.size / 1024)} KB;
        fileDetails.style.display = 'block';
      
        // Upload the file and get the URL
        uploadOnMyimagerAndGetUrl(fileInput, MyImager_Client_Key, Project_Key);
      }
    });

    // Simulate the upload and getting URL (you will need to implement this function)
    function uploadOnMyimagerAndGetUrl(file, clientKey, projectKey) {
      // Simulate the upload process
      console.log('Uploading file:', file);
      console.log('Using Client Key:', clientKey);
      console.log('Using Project Key:', projectKey);

      // Simulate a successful upload and getting the URL
      setTimeout(() => {
        const uploadedUrl = 'https://myimager.com/your-uploaded-file-url';
        console.log('File uploaded successfully:', uploadedUrl);
        alert('File uploaded successfully! URL: ' + uploadedUrl);
      }, 2000);
    }
  </script>

`;

export const dashboardMenu = [
  {
    name: "All projects",
    id: "project",
    type: "Projects",
  },
  {
    name: "Kiran",
    id: "Organizations",
    type: "Organizations",
  },

  {
    name: "Access Tokens",
    id: "Access_Tokens",
    type: "Account",
  },
  {
    name: "Security",
    id: "Security",
    type: "Account",
  },
];
