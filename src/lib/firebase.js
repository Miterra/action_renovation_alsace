import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

// Configuration Firebase (clés client PUBLIQUES — sans danger dans le code :
// la sécurité est assurée par les règles de la Realtime Database, pas par ces
// identifiants. C'est la pratique officielle recommandée par Firebase.)
const firebaseConfig = {
  apiKey: 'AIzaSyBXUJ0xjA4zNcQwXGl_FTG4hY9Uj26KtHo',
  authDomain: 'action-renovation-alsace.firebaseapp.com',
  databaseURL:
    'https://action-renovation-alsace-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'action-renovation-alsace',
  storageBucket: 'action-renovation-alsace.firebasestorage.app',
  messagingSenderId: '81754470344',
  appId: '1:81754470344:web:dbb282955c0f147bf2b2fd',
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
