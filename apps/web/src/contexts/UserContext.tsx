import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

type User = {
  id: string;
  email?: string;
  created_at?: string;
};

type UserContentType = {
  getUser: () => Promise<User | undefined>;
  user: User | undefined;
  loading: boolean;
};

const UserContext = createContext<UserContentType | undefined>(undefined);

const USER_ID_KEY = "opencanvas_user_id";

function getOrCreateUserId(): string {
  if (typeof window === "undefined") {
    return "server-side-user";
  }
  
  let userId = localStorage.getItem(USER_ID_KEY);
  if (!userId) {
    userId = uuidv4();
    localStorage.setItem(USER_ID_KEY, userId);
  }
  return userId;
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userId = getOrCreateUserId();
    setUser({
      id: userId,
      email: `user-${userId.slice(0, 8)}@opencanvas.local`,
      created_at: new Date().toISOString(),
    });
    setLoading(false);
  }, []);

  async function getUser() {
    setLoading(false);
    return user;
  }

  const contextValue: UserContentType = {
    getUser,
    user,
    loading,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}
