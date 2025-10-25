import { Volume2, Youtube } from "lucide-react";
import type { ListeningSection as ListeningSectionType } from "../../types/types";

interface ListeningSectionProps {
  listening: ListeningSectionType;
}

const YouTubeEmbed = ({ url, title }: { url: string; title: string }) => {
  // YouTube URL dan video ID ni ajratib olish
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(url);
  if (!videoId) return null;

  return (
    <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all">
      <h5 className="text-white font-medium mb-3">{title}</h5>
      <div className="relative w-full pt-[45%] md:pt-[35%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export const ListeningSection = ({ listening }: ListeningSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Youtube className="w-6 h-6 text-red-500" />
          Video darslar
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {listening.youtubeVideos?.map((video, idx) => (
            <YouTubeEmbed key={idx} url={video.url} title={video.title} />
          ))}
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-purple-400" />
            Qo'shimcha audio resurslar
          </h4>
          <div className="grid gap-3">
            {listening.resources.map((resource, idx) => (
              <div
                key={idx}
                className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4"
              >
                <p className="text-white">{resource}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-purple-300 mb-4">
            Mashqlar
          </h4>
          <div className="grid gap-3">
            {listening.exercises.map((ex, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white/5 rounded-lg p-4"
              >
                <Volume2 className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                <p className="text-white">{ex}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
