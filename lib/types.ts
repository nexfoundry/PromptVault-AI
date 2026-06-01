// User Types
export interface User {
  id: string;
  email: string;
  username?: string;
  avatar_url?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
}

// Prompt Types
export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  author_id: string;
  author?: User;
  views: number;
  likes: number;
  rating: number;
  created_at: string;
  updated_at: string;
}

export interface CreatePromptInput {
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
}

// Like Types
export interface Like {
  id: string;
  user_id: string;
  prompt_id: string;
  created_at: string;
}

// Comment Types
export interface Comment {
  id: string;
  content: string;
  user_id: string;
  user?: User;
  prompt_id: string;
  created_at: string;
  updated_at: string;
}

export interface CreateCommentInput {
  content: string;
  prompt_id: string;
}

// Rating Types
export interface Rating {
  id: string;
  score: number;
  user_id: string;
  prompt_id: string;
  created_at: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
