
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, BookOpen, BookText, BookMarked } from "lucide-react";

const TeachingsPage = () => {
  const teachings = [
    {
      title: "Bhagavad Gita Essence",
      description: "Core teachings from the divine dialogue between Lord Krishna and Arjuna on the battlefield of Kurukshetra.",
      icon: BookOpen,
      content: "The Bhagavad Gita teaches that true freedom comes from performing one's duties without attachment to results. It emphasizes the importance of selfless action, devotion, and spiritual knowledge."
    },
    {
      title: "Karma Yoga",
      description: "The path of selfless action and duty without attachment to results.",
      icon: Book,
      content: "Karma Yoga is the path of selfless action. By performing duties without attachment to outcomes, one can achieve spiritual liberation. This path teaches that right action done without selfish motives purifies the mind."
    },
    {
      title: "Bhakti Yoga",
      description: "The path of loving devotion and surrender to the Divine.",
      icon: BookText,
      content: "Bhakti Yoga is the path of loving devotion. Through prayer, worship, and surrender to the Divine, one can transcend the ego and experience divine union. This path emphasizes that love is the most direct route to spiritual realization."
    },
    {
      title: "Jnana Yoga",
      description: "The path of spiritual wisdom and self-knowledge.",
      icon: BookMarked,
      content: "Jnana Yoga is the path of spiritual wisdom. Through deep inquiry into the nature of existence, one can realize the ultimate truth. This path teaches discrimination between the eternal and the temporary, leading to liberation through knowledge."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-divine-purple-light/5">
      <Header />
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-divine-purple to-divine-purple-dark">
            Divine Teachings
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Ancient wisdom for modern spiritual seekers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {teachings.map((teaching, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <teaching.icon className="h-8 w-8 text-divine-purple" />
                  <div>
                    <CardTitle>{teaching.title}</CardTitle>
                    <CardDescription>{teaching.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{teaching.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-divine-purple">Daily Shloka</h2>
            <div className="bg-divine-purple/5 p-4 rounded border border-divine-purple/20 mb-4">
              <p className="font-sanskrit italic">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।</p>
              <p className="text-sm mt-2">You have the right to perform your duties, but you are not entitled to the fruits of your actions.</p>
              <p className="text-xs text-gray-600 mt-1">— Bhagavad Gita 2.47</p>
            </div>
            <p className="text-gray-700">
              This shloka reminds us to focus on our actions with full dedication, without being attached to the results. 
              This detachment from outcomes brings peace of mind and spiritual growth.
            </p>
          </div>

          <div className="mandala-bg p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-divine-purple">Upcoming Divine Sessions</h2>
            
            <ScrollArea className="h-64 rounded-md border p-4">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-bold">Gita Discussion Circle</h3>
                  <p className="text-sm text-gray-600">Every Sunday • 10:00 AM</p>
                  <p className="text-sm mt-2">Weekly discussion on Bhagavad Gita chapters with practical applications for daily life.</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-bold">Meditation Workshop</h3>
                  <p className="text-sm text-gray-600">Wednesdays • 6:00 PM</p>
                  <p className="text-sm mt-2">Learn various meditation techniques from different spiritual traditions.</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-bold">Bhajan & Kirtan</h3>
                  <p className="text-sm text-gray-600">First Friday of the month • 7:00 PM</p>
                  <p className="text-sm mt-2">Devotional singing and chanting to connect with divine energy.</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-bold">Yogic Philosophy</h3>
                  <p className="text-sm text-gray-600">Saturdays • 9:00 AM</p>
                  <p className="text-sm mt-2">Deep dive into the philosophical foundations of yoga beyond the physical postures.</p>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeachingsPage;
