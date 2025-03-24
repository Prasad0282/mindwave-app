function App() {
  const [showChat, setShowChat] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkUser();
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuthenticated(!!session);
        setIsLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const checkUser = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    } catch (error) {
      console.error("Error checking auth status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFAF0]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1ed75f]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFAF0]">
      {!isAuthenticated ? (
        !showChat ? (
          <LandingPage onStart={() => setShowChat(true)} />
        ) : (
          <LoginPage onAuthSuccess={() => setIsAuthenticated(true)} />
        )
      ) : (
        <ChatPage />
      )}
    </div>
  );
}
