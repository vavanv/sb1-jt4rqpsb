export interface User {
  id: string;
  email: string;
  role: 'admin' | 'speaker' | 'attendee';
  name: string;
  avatar_url?: string;
  created_at: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  speaker_id: string;
  start_time: string;
  end_time: string;
  room: string;
  capacity: number;
  registered_count: number;
}

export interface Speaker {
  id: string;
  user_id: string;
  bio: string;
  topics: string[];
  sessions: Session[];
}

export interface Question {
  id: string;
  session_id: string;
  user_id: string;
  content: string;
  upvotes: number;
  created_at: string;
}

export interface Registration {
  id: string;
  user_id: string;
  session_id: string;
  created_at: string;
}