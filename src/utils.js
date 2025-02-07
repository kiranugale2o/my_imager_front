import {
  Brain,
  Building2,
  ChartCandlestickIcon,
  Church,
  Command,
  ReceiptIndianRupee,
  Terminal,
  Tractor,
} from "lucide-react";

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
    path: "/docs/sendOnMyimager",
    name: "sendOnMyimager()",
    type: "function",
  },
  {
    path: "/docs/askMyimager",
    name: "askMyimager()",
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
       const res= sendOnMyimager(fileInput, MyImager_Client_Key, Project_Key);
       console.log(res)
      }
    });

    // Simulate the upload and getting URL (you will need to implement this function)
    function sendOnMyimager(file, clientKey, projectKey) {
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

export const brands = [
  {
    logo: (
      <>
        <Terminal />
      </>
    ),
    text: "Hackjack",
    url:
      "https://firebasestorage.googleapis.com/v0/b/devtech-b5946.appspot.com/o/logo1.png?alt=media&token=bf49724d-8c2e-4af2-a370-961457025219",
  },
  {
    logo: (
      <>
        <Command />
      </>
    ),
    text: "SCS_Tech",
    url:
      "https://firebasestorage.googleapis.com/v0/b/devtech-b5946.appspot.com/o/logo2.webp?alt=media&token=9bdf45ab-03d2-4b56-9429-a16ca5c01d1a",
  },
  {
    logo: (
      <>
        <Building2 />
      </>
    ),
    text: "Deel.",
    url:
      "https://firebasestorage.googleapis.com/v0/b/devtech-b5946.appspot.com/o/logo3.jpg?alt=media&token=f20449f4-a47a-47ac-878f-ab6181377a1b",
  },
  {
    logo: (
      <>
        <Terminal />
      </>
    ),
    text: "Brex",
    url:
      "https://firebasestorage.googleapis.com/v0/b/devtech-b5946.appspot.com/o/logo4.png?alt=media&token=3b579e26-9443-448d-b872-8f5e500041e8",
  },
  {
    logo: (
      <>
        <Tractor />
      </>
    ),
    text: "MyCrop",
    url:
      "https://firebasestorage.googleapis.com/v0/b/devtech-b5946.appspot.com/o/logo5.png?alt=media&token=88a20f9e-a1fe-4ee4-9d9b-b520889420f7",
  },
  {
    logo: (
      <>
        <ReceiptIndianRupee />
      </>
    ),
    text: "Cropkhata",
    url:
      "https://firebasestorage.googleapis.com/v0/b/devtech-b5946.appspot.com/o/logo6.jpg?alt=media&token=c2391507-f469-4fc4-80ad-e47bac3b1b82",
  },
  {
    logo: (
      <>
        <Church />
      </>
    ),
    text: "tech_Security",
    url:
      "https://firebasestorage.googleapis.com/v0/b/devtech-b5946.appspot.com/o/logo7.jpg?alt=media&token=d679c01d-feb1-4f54-8f8e-3325892e6a41",
  },
];

export const userInitialData = {
  userId: "",
  email: "",
  first_name: "",
  last_name: "",
  profile_picture: "",
  organization_name: "",
};

export function formatDate() {
  const today = new Date(); // Get today's date
  const year = today.getFullYear(); // Get the full year (e.g., 2025)
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Get the month (0-11) and add leading zero
  const day = String(today.getDate()).padStart(2, "0"); // Get the day of the month and add leading zero

  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(`${year}-${month}-${day}`).toLocaleDateString(
    "en-GB",
    options
  ); // 'en-GB' ensures the format is like '12 Jan 2025'
}
