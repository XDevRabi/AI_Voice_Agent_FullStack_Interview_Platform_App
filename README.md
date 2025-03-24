# AI Voice Agent Interview Platform

An innovative open-source platform that combines AI and voice technology to provide automated technical interviews, feedback, and assessment capabilities.

## 🌟 Features

- **AI-Powered Interviews**: Generate role-specific interview questions using Google's Gemini AI
- **Voice Interaction**: Natural conversation flow with AI voice agent
- **Smart Feedback**: Automated, comprehensive feedback on interview performance
- **Customizable Sessions**:
  - Technical and behavioral interview types
  - Experience level adaptation
  - Tech stack-specific questions
- **Secure Authentication**: Firebase-based user management
- **Interview History**: Track and review past interviews
- **Real-time Assessment**: Instant feedback and scoring across multiple competencies

## 🚀 Tech Stack

- **Frontend**: Next.js 15.2.3, React 19
- **Backend**: Firebase (Authentication & Firestore)
- **AI Integration**: Google Gemini AI
- **Voice Technology**: VAPI AI
- **Styling**: TailwindCSS
- **Type Safety**: TypeScript

## 📋 Prerequisites

- Node.js (v18 or higher)
- Firebase Account
- Google Cloud Account (for Gemini AI)
- VAPI AI Account

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```plaintext
# Firebase Config
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Firebase Admin
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key

# AI Services
GEMINI_API_KEY=your_gemini_api_key
VAPI_API_KEY=your_vapi_api_key
```

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/XDevRabi/AI_Voice_Agent_FullStack_Interview_Platform_App.git
cd AI_Voice_Agent_FullStack_Interview_Platform_App
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## 🏗️ Project Structure

```plaintext
AI_Voice_Agent_FullStack_Interview_Platform_App/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   └── ...                # Page components
├── components/            # Reusable components
├── lib/                   # Utility functions and actions
├── firebase/             # Firebase configuration
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## 🤝 Contributing
We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch ( git checkout -b feature/AmazingFeature )
3. Commit your changes ( git commit -m 'Add some AmazingFeature' )
4. Push to the branch ( git push origin feature/AmazingFeature )
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments
- Google Gemini AI for powering our question generation
- VAPI AI for voice interaction capabilities
- Firebase for backend services
- All contributors who help improve this platform

## 🙌 Special Thanks
Special heartfelt thanks to [JSMastery](https://beta.jsmastery.pro/) for being an incredible source of inspiration and knowledge. Your dedication to teaching and sharing expertise has been invaluable. I'm truly grateful! ❤️🙏✨
