import React, { useState, useEffect } from 'react';
import {
  Scroll,
  Heart,
  Users,
  Music,
  BookOpen,
  Camera,
  Sparkles,
  Cake,
  Mic,
  Gift,
  PartyPopper,
  Flame,
  Download,
  Eye,
  CheckCircle2,
  X,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

export interface SongSection {
  type: 'verse' | 'chorus';
  label: string;
  lines: string[];
}

export interface SongData {
  id: '131' | '132';
  number: number;
  title: string;
  theme: string;
  scriptureRef: string;
  jwUrl: string;
  sections: SongSection[];
}

export const SONGS_DATA: Record<'131' | '132', SongData> = {
  '131': {
    id: '131',
    number: 131,
    title: 'What God Has Yoked Together',
    theme: 'Sing Out Joyfully to Jehovah',
    scriptureRef: 'Matthew 19:5, 6',
    jwUrl: 'https://www.jw.org/en/library/music-songs/sing-out-joyfully/131-what-god-yoked-together/',
    sections: [
      {
        type: 'verse',
        label: 'Verse 1',
        lines: [
          'With dignity and joy,',
          'A threefold cord is bound.',
          'With God and men to witness,',
          'These sacred vows resound.',
        ],
      },
      {
        type: 'chorus',
        label: 'Chorus',
        lines: [
          'He vowed before Jehovah',
          'To love her from the heart.',
          '“What God has yoked together,',
          'Let no man put apart.”',
        ],
      },
      {
        type: 'verse',
        label: 'Verse 2',
        lines: [
          'They both have searched God’s Word',
          'To learn to do his will,',
          'And now they seek his blessing,',
          'Their promise to fulfill.',
        ],
      },
      {
        type: 'chorus',
        label: 'Chorus',
        lines: [
          'She vowed before Jehovah',
          'To love him from the heart.',
          '“What God has yoked together,',
          'Let no man put apart.”',
        ],
      },
    ],
  },
  '132': {
    id: '132',
    number: 132,
    title: 'Now We Are One',
    theme: 'Sing Out Joyfully to Jehovah',
    scriptureRef: 'Genesis 2:23, 24',
    jwUrl: 'https://www.jw.org/en/library/music-songs/sing-out-joyfully/132-now-we-are-one/',
    sections: [
      {
        type: 'verse',
        label: 'Verse',
        lines: [
          'This is at last bone of my bone,',
          'Flesh of my flesh; now I’m not alone.',
          'God has provided a partner,',
          'Someone to call my own.',
          'Now we are one; now we can be',
          'All that Jehovah made us to be.',
          'As man and woman together,',
          'We are a family.',
        ],
      },
      {
        type: 'chorus',
        label: 'Refrain / Chorus',
        lines: [
          'Ev’ry day we’ll serve our God above.',
          'As he shows the way,',
          'Unfailing love we’ll display.',
          'As we have vowed, so may it be.',
          'Seasons of joy, may we come to see.',
          'Oh, may we honor Jehovah,',
          'And may you always be my love.',
        ],
      },
    ],
  },
};

interface ProgramItem {
  number: number;
  title: string;
  subtitle?: string;
  speaker?: string;
  category?: 'arrival' | 'entrance' | 'ceremony' | 'music' | 'prayer' | 'entertainment' | 'food' | 'photo' | 'dance';
  highlight?: boolean;
  songId?: '131' | '132';
}

const VOW_PROGRAM: ProgramItem[] = [
  {
    number: 1,
    title: 'Arrival of Guests',
    subtitle: 'Welcome to the celebration of Tosin & Kelvin',
    category: 'arrival',
  },
  {
    number: 2,
    title: 'Bridal Processional',
    subtitle: 'Bride Walking Down the Aisle with Her Father',
    category: 'entrance',
    highlight: true,
  },
  {
    number: 3,
    title: 'Opening Song 131',
    subtitle: '“What God Has Yoked Together” (Chairman & Opening Prayer)',
    speaker: 'Bro Solomon Edobor',
    category: 'music',
    songId: '131',
  },
  {
    number: 4,
    title: 'Wedding Talk & Bible-Based Advice',
    speaker: 'Speaker: Bro Micah Okedi',
    category: 'ceremony',
    highlight: true,
  },
  {
    number: 5,
    title: 'Prayer for the Couple',
    speaker: 'Bro Micah Okedi',
    category: 'prayer',
  },
  {
    number: 6,
    title: 'Closing Song 132',
    subtitle: '“Now We Are One”',
    category: 'music',
    songId: '132',
  },
  {
    number: 7,
    title: 'Closing Prayer',
    speaker: 'Bro A. Erasmus',
    category: 'prayer',
  },
  {
    number: 8,
    title: 'Picture Time',
    subtitle: 'Group photos & memorable moments with the couple',
    category: 'photo',
    highlight: true,
  },
];

const RECEPTION_PROGRAM: ProgramItem[] = [
  {
    number: 1,
    title: 'Arrival of Guests / General Welcome',
    category: 'arrival',
  },
  {
    number: 2,
    title: "Entrance of Groom's Family",
    category: 'entrance',
  },
  {
    number: 3,
    title: "Entrance of Bride's Family",
    category: 'entrance',
  },
  {
    number: 4,
    title: 'Entrance of the Men on Suit and Bridal Girls',
    subtitle: 'Bridal party joyful procession',
    category: 'entrance',
  },
  {
    number: 5,
    title: "Couple's Grand Entrance",
    subtitle: 'Welcoming the new Mr. & Mrs. Ikponmwosa!',
    category: 'entrance',
    highlight: true,
  },
  {
    number: 6,
    title: "Opening Prayer & Chairman's Opening Remarks",
    speaker: 'Bro J. OLOSE',
    category: 'prayer',
  },
  {
    number: 7,
    title: 'MC Duties',
    category: 'entertainment',
  },
  {
    number: 8,
    title: 'Cutting of the Cake',
    category: 'ceremony',
    highlight: true,
  },
  {
    number: 9,
    title: "Couple's First Task",
    category: 'ceremony',
  },
  {
    number: 10,
    title: 'Games for the Bridal Party',
    category: 'entertainment',
  },
  {
    number: 11,
    title: "Couple's First Dance",
    subtitle: 'A romantic milestone as husband and wife',
    category: 'dance',
    highlight: true,
  },
  {
    number: 12,
    title: 'Bride and Groom Dance with Parents',
    category: 'dance',
  },
  {
    number: 13,
    title: "Couple's Game",
    category: 'entertainment',
  },
  {
    number: 14,
    title: 'Time with MC',
    category: 'entertainment',
  },
  {
    number: 15,
    title: 'Presentation of Gifts',
    category: 'entertainment',
  },
  {
    number: 16,
    title: "Chairman's Closing Remarks",
    category: 'ceremony',
  },
  {
    number: 17,
    title: 'Vote of Thanks',
    speaker: 'by Groom',
    category: 'ceremony',
    highlight: true,
  },
  {
    number: 18,
    title: 'Closing Prayer',
    speaker: 'Bro Mark I',
    category: 'prayer',
  },
  {
    number: 19,
    title: 'Dance Session 🎉',
    subtitle: 'The dance floor is officially open!',
    category: 'dance',
    highlight: true,
  },
  {
    number: 20,
    title: 'Dance',
    category: 'dance',
  },
  {
    number: 21,
    title: 'Dance',
    category: 'dance',
    highlight: true,
  },
];

export const ProgramsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vow' | 'reception'>('vow');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);
  const [selectedSongId, setSelectedSongId] = useState<'131' | '132' | null>(null);
  const [copiedLyrics, setCopiedLyrics] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedSongId(null);
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyLyrics = (song: SongData) => {
    const text = `${song.title} (Song ${song.number})\n${song.theme} • Scripture: ${song.scriptureRef}\n\n` +
      song.sections.map((s) => `[${s.label}]\n${s.lines.join('\n')}`).join('\n\n') +
      `\n\nJW.ORG: ${song.jwUrl}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedLyrics(true);
        setTimeout(() => setCopiedLyrics(false), 2200);
      }).catch(() => {});
    }
  };

  const vowCardPath = 'https://res.cloudinary.com/solarrays/image/upload/v1792708964/wedding/programs/Order_of_Service_hfxppo.jpg';
  const receptionCardPath = 'https://res.cloudinary.com/solarrays/image/upload/v1792708964/wedding/programs/Program_of_events_imr3fk.jpg';

  const currentProgram = activeTab === 'vow' ? VOW_PROGRAM : RECEPTION_PROGRAM;
  const currentCardSrc = activeTab === 'vow' ? vowCardPath : receptionCardPath;
  const currentTitle = activeTab === 'vow' ? 'Vow Ceremony Program' : 'Reception Program';

  const activeSong = selectedSongId ? SONGS_DATA[selectedSongId] : null;

  const getItemIcon = (category?: string, number?: number) => {
    switch (category) {
      case 'arrival':
        return <Users className="w-4 h-4 text-[#58111a]" />;
      case 'entrance':
        return <Sparkles className="w-4 h-4 text-[#9c4d62]" />;
      case 'music':
        return <Music className="w-4 h-4 text-[#8a3348]" />;
      case 'ceremony':
        return number === 8 && activeTab === 'reception' ? (
          <Cake className="w-4 h-4 text-[#58111a]" />
        ) : (
          <BookOpen className="w-4 h-4 text-[#58111a]" />
        );
      case 'prayer':
        return <Heart className="w-4 h-4 text-[#58111a]" />;
      case 'photo':
        return <Camera className="w-4 h-4 text-[#58111a]" />;
      case 'dance':
        return <PartyPopper className="w-4 h-4 text-[#9c4d62]" />;
      case 'entertainment':
        return <Mic className="w-4 h-4 text-[#8a3348]" />;
      default:
        return <Scroll className="w-4 h-4 text-[#58111a]" />;
    }
  };

  return (
    <section id="programs" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#58111a] font-extrabold">
            Order of Events & Itinerary
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1816] mt-1 font-normal italic">
            Programs
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 my-4 text-[#58111a]">
            <span className="h-[1px] w-12 bg-[#58111a]/40" />
            <Scroll className="w-4 h-4 text-[#58111a]" />
            <span className="h-[1px] w-12 bg-[#58111a]/40" />
          </div>

          <p className="text-sm text-[#2a241f] font-normal max-w-xl mx-auto leading-relaxed">
            Follow along with the schedule of our special day. Switch between the 
            solemn Vow Ceremony and the lively Reception celebration.
          </p>

          {/* Program Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#ecd9df] shadow-sm max-w-md w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('vow')}
              className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'vow'
                  ? 'bg-[#58111a] text-white shadow-md'
                  : 'text-[#58111a]/80 hover:text-[#58111a] hover:bg-white/60'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${activeTab === 'vow' ? 'fill-white text-white' : ''}`} />
              <span>Vow Ceremony Program</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('reception')}
              className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === 'reception'
                  ? 'bg-[#58111a] text-white shadow-md'
                  : 'text-[#58111a]/80 hover:text-[#58111a] hover:bg-white/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Reception Program</span>
            </button>
          </div>
        </div>

        {/* Content Section: 2 Column Layout (Digital Order of Service on left, Keepsake Card on right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Digital Order of Events */}
          <div className="lg:col-span-7">
            <div className="backdrop-blur-2xl bg-white/90 border border-white/90 rounded-[28px] p-6 sm:p-8 shadow-md relative overflow-hidden">
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#58111a]/10">
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#58111a] bg-[#f9ecef] px-3 py-1 rounded-full uppercase border border-[#f2d6dc]">
                    {activeTab === 'vow' ? 'TWO HEARTS • ONE JOURNEY' : 'CELEBRATION OF LOVE'}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1816] font-normal italic mt-2">
                    {currentTitle}
                  </h3>
                  <p className="text-xs text-[#58111a]/70 font-medium mt-0.5">
                    {activeTab === 'vow'
                      ? 'The Wedding Vow Ceremony of Tosin & Kelvin'
                      : 'Program of Events for Reception & Evening Party'}
                  </p>
                </div>
                <div className="hidden sm:flex flex-col items-end text-right">
                  <span className="text-xs font-serif text-[#58111a] italic">
                    {currentProgram.length} Items
                  </span>
                </div>
              </div>

              {/* Numbered Interactive Event List */}
              <div className="space-y-3.5 max-h-[720px] overflow-y-auto pr-2 custom-scrollbar">
                {currentProgram.map((item) => (
                  <div
                    key={item.number}
                    onClick={() => {
                      if (item.songId) {
                        setSelectedSongId(item.songId);
                      }
                    }}
                    className={`group p-4 rounded-2xl transition-all duration-200 border flex items-start gap-4 ${
                      item.highlight
                        ? 'bg-gradient-to-r from-[#fbf4f6] to-[#fff] border-[#f2d6dc] shadow-sm'
                        : 'bg-white/60 hover:bg-white border-[#f3ebed] hover:border-[#e8d5cc]'
                    } ${item.songId ? 'cursor-pointer hover:shadow-md hover:border-[#58111a]/30' : ''}`}
                  >
                    {/* Index Badge */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-serif text-sm font-semibold transition-transform duration-200 group-hover:scale-105 ${
                        item.highlight || item.songId
                          ? 'bg-[#58111a] text-white shadow-sm'
                          : 'bg-[#f7ecef] text-[#58111a]'
                      }`}
                    >
                      {item.number}
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                        <h4
                          className={`text-sm sm:text-base font-medium leading-snug tracking-tight ${
                            item.highlight ? 'text-[#1a1816] font-semibold' : 'text-[#2a241f]'
                            } ${item.songId ? 'group-hover:text-[#58111a] font-semibold' : ''}`}
                        >
                          {item.title}
                        </h4>
                          {item.songId && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider bg-[#f6ebef] text-[#58111a] px-2 py-0.5 rounded-full border border-[#ecd9df]">
                              <Music className="w-2.5 h-2.5" />
                              <span>Click for Lyrics</span>
                            </span>
                          )}
                        </div>
                        <div className="p-1 rounded-lg bg-[#faf2f4] shrink-0">
                          {getItemIcon(item.category, item.number)}
                        </div>
                      </div>

                      {item.subtitle && (
                        <p className="text-xs text-[#6e5d53] italic mt-0.5 leading-relaxed">
                          {item.subtitle}
                        </p>
                      )}

                      {item.speaker && (
                        <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f6ebef] text-[11px] font-medium text-[#58111a] border border-[#ecd9df]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#58111a]" />
                          <span>{item.speaker}</span>
                        </div>
                      )}

                      {/* Explicit Interactive Button for Songs */}
                      {item.songId && (
                        <div className="mt-2.5 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSongId(item.songId!);
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#58111a] text-white hover:bg-[#430c13] text-xs font-semibold tracking-wide transition-all duration-200 shadow-xs hover:shadow cursor-pointer"
                          >
                            <Music className="w-3.5 h-3.5 text-rose-200" />
                            <span>Read Song {item.songId} Lyrics</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote / Signoff */}
              <div className="mt-6 pt-5 border-t border-[#58111a]/10 flex items-center justify-between text-xs text-[#58111a]/80">
                <span className="font-serif italic">
                  {activeTab === 'vow' ? 'Forever Begins Here ♥' : 'Let the Celebration Continue! 🥂'}
                </span>
                <span className="text-[11px] text-[#2a241f]/60">
                  Tosin & Kelvin Wedding
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Keepsake Program Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="backdrop-blur-2xl bg-white/90 border border-white/90 rounded-[28px] p-6 shadow-md overflow-hidden flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-wider text-[#58111a] uppercase">
                  Official Program Card
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxImage({
                        src: currentCardSrc,
                        title: currentTitle,
                      })
                    }
                    className="p-1.5 rounded-xl bg-[#f7ecef] text-[#58111a] hover:bg-[#58111a] hover:text-white transition-colors"
                    title="View Fullscreen"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href={currentCardSrc}
                    download={`${currentTitle.toLowerCase().replace(/\s+/g, '-')}-tosin-kelvin.png`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-xl bg-[#f7ecef] text-[#58111a] hover:bg-[#58111a] hover:text-white transition-colors"
                    title="Download Card"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Interactive Image Frame */}
              <div
                onClick={() =>
                  setLightboxImage({
                    src: currentCardSrc,
                    title: currentTitle,
                  })
                }
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg border border-[#e8d5cc]/80 bg-[#1f1b1a] transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
              >
                <img
                  src={currentCardSrc}
                  alt={currentTitle}
                  className="w-full max-h-[560px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white p-4 text-center">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium tracking-wide uppercase">
                    Click to Enlarge Card
                  </span>
                </div>
              </div>

              {/* Action Buttons Below Card */}
              <div className="w-full mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      src: currentCardSrc,
                      title: currentTitle,
                    })
                  }
                  className="w-full py-2.5 px-4 rounded-xl border border-[#58111a]/30 text-[#58111a] hover:bg-[#fbf4f6] text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Full</span>
                </button>

                <a
                  href={currentCardSrc}
                  download={`${currentTitle.toLowerCase().replace(/\s+/g, '-')}-tosin-kelvin.png`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#58111a] hover:bg-[#430c13] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save Keepsake</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Song Lyrics Modal */}
      {activeSong && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedSongId(null)}
        >
          <div
            className="relative w-full max-w-xl bg-[#fdfaf7] rounded-[28px] border border-[#e8d5cc] shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Banner */}
            <div className="relative bg-gradient-to-br from-[#58111a] via-[#480c14] to-[#2d070c] text-white p-6 sm:p-7 overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-8 opacity-10 pointer-events-none">
                <Music className="w-32 h-32 text-white" />
              </div>

              {/* Top row: Tab Switcher & Close Button */}
              <div className="flex items-center justify-between gap-3 relative z-10 mb-4">
                {/* Switch between Song 131 and 132 */}
                <div className="inline-flex p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                  <button
                    type="button"
                    onClick={() => setSelectedSongId('131')}
                    className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors ${
                      selectedSongId === '131'
                        ? 'bg-white text-[#58111a] shadow-sm font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Song 131
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSongId('132')}
                    className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors ${
                      selectedSongId === '132'
                        ? 'bg-white text-[#58111a] shadow-sm font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    Song 132
                  </button>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedSongId(null)}
                  className="p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors cursor-pointer"
                  aria-label="Close Lyrics"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Scripture info */}
              <div className="relative z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#f5c6cb] bg-white/10 px-2.5 py-0.5 rounded-full">
                  Sing Out Joyfully to Jehovah • Song {activeSong.number}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal italic mt-2 leading-tight">
                  {activeSong.title}
                </h3>
                <p className="text-xs text-white/80 font-sans mt-1">
                  Scripture Theme: <span className="font-medium text-white">{activeSong.scriptureRef}</span>
                </p>
              </div>
            </div>

            {/* Lyrics Content */}
            <div className="p-6 sm:p-8 max-h-[58vh] overflow-y-auto space-y-6 custom-scrollbar bg-gradient-to-b from-[#fdfaf7] to-[#f9f3ef]">
              {activeSong.sections.map((section, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-5 border transition-all ${
                    section.type === 'chorus'
                      ? 'bg-gradient-to-r from-[#fbf2f4] to-[#f7e6eb] border-[#f0cdd6] shadow-xs'
                      : 'bg-white/80 border-[#ede1da]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                        section.type === 'chorus'
                          ? 'bg-[#58111a] text-white'
                          : 'bg-[#ede1da] text-[#58111a]'
                      }`}
                    >
                      {section.label}
                    </span>
                    {section.type === 'chorus' && (
                      <span className="text-xs text-[#58111a]/70 italic font-serif">
                        (Refrain)
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    {section.lines.map((line, lineIdx) => (
                      <p
                        key={lineIdx}
                        className={`text-sm sm:text-base leading-relaxed ${
                          section.type === 'chorus'
                            ? 'font-serif text-[#1a1816] italic font-medium'
                            : 'text-[#2a241f] font-normal'
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Ceremony Note */}
              <div className="p-3.5 rounded-xl bg-[#f5ecf0] border border-[#e8d5cc] text-center">
                <p className="text-xs text-[#58111a] font-serif italic">
                  {activeSong.id === '131'
                    ? '“What God has yoked together, let no man put apart.” — Matthew 19:6'
                    : '“Now we are one; now we can be all that Jehovah made us to be.” — Genesis 2:24'}
                </p>
              </div>
            </div>

            {/* Modal Footer / Actions */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#ede1da] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleCopyLyrics(activeSong)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-[#58111a]/30 text-[#58111a] hover:bg-[#faf0f3] text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                >
                  {copiedLyrics ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Lyrics Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Lyrics</span>
                    </>
                  )}
                </button>

                <a
                  href={activeSong.jwUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#58111a] hover:bg-[#430c13] text-white text-xs font-semibold tracking-wide transition-colors shadow-xs"
                >
                  <span>Listen on JW.ORG</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSongId(null)}
                className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-[#6e5d53] hover:text-[#1a1816] transition-colors text-center cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-2xl max-h-[90vh] bg-transparent flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-h-[82vh] w-auto rounded-2xl shadow-2xl object-contain border border-white/20"
            />

            <div className="mt-3 flex items-center justify-between w-full text-white/90 text-xs px-2">
              <span className="font-serif italic text-sm">{lightboxImage.title}</span>
              <a
                href={lightboxImage.src}
                download
                className="underline hover:text-white flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download High-Res</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};