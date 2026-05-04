import type { LessonCard } from "../types";
import { strong } from "./rich";

export const lessons: LessonCard[] = [
  {
    id: 1,
    topic: "Committed conversations",
    color: "#008731",
    accent: "#006a2a",
    icon: "handshake",
    frontLines: ["I shift from", "uncommitted", "to committed", "conversations"],
    sourceFront: "/assets/leaflet-front/1.jpeg",
    sourceBack: "/assets/leaflet-back/1.jpeg",
    backParagraphs: [
      [
        strong("Commitment"),
        " is a choice to a future where you don't necessarily know yet how to get there. It is manifested through observable ",
        strong("behaviors"),
        " and actions."
      ]
    ],
    bullets: [
      ["If you commit, stick to it OR revoke your commitment."],
      ["Tell people what you are committed to. Where do YOU stand regarding the situation?"],
      ["Align with the decisions of your team even if you disagree."],
      ["Own your assessments, opinions and judgements as YOURS."],
      [
        'If you are saying "yes" to someone, give them a clear "yes", not "I will try" or "I will see what I can do" type of response.'
      ]
    ]
  },
  {
    id: 2,
    topic: "Authenticity",
    color: "#c72012",
    accent: "#9f180e",
    icon: "compass",
    frontLines: [
      "I am being",
      "authentic by",
      "bringing",
      "conversations from",
      "the background",
      "to the foreground"
    ],
    sourceFront: "/assets/leaflet-front/2.jpeg",
    sourceBack: "/assets/leaflet-back/2.jpeg",
    backParagraphs: [
      ["Authenticity is about having your foreground and background conversations be the same."],
      [
        "You might feel as if you are taking a risk. So, being authentic often requires some courage."
      ]
    ],
    bullets: [
      [
        "Being authentic is the easiest way to build connections and trust with others. It is the foundation for leadership conversations."
      ],
      [
        "Others gain the benefit of your wisdom and insights which could make all the difference in the critical moments."
      ],
      ["Straight talk: tell it like it is, respectfully."]
    ]
  },
  {
    id: 3,
    topic: "Requests",
    color: "#0496cf",
    accent: "#047aae",
    icon: "request",
    frontLines: ["I transform", "complaints", "into requests"],
    sourceFront: "/assets/leaflet-front/3.jpeg",
    sourceBack: "/assets/leaflet-back/3.jpeg",
    backParagraphs: [
      ["Stop carrying your ", strong("negativity"), " around and FORMULATE REQUESTS!"],
      [
        "Complaints affect the ",
        strong("mood"),
        " of an organization. Turn your complaints into ",
        strong("requests"),
        "."
      ]
    ],
    bullets: [
      ["We all know that complaining doesn't solve anything."],
      ["Make specific requests about what's missing."],
      [
        "Raise an issue to the person who can influence the situation (if you don't know to whom, ask your N+1)."
      ],
      [
        'Do not speak about things in a vague or unclear manner. Make clear requests with a "by when" it will be done included! Talk straight to each other.'
      ]
    ]
  },
  {
    id: 4,
    topic: "What's missing",
    color: "#0051a7",
    accent: "#003f86",
    icon: "puzzle",
    frontLines: ['I practice', '"What\'s missing?"', "rather than", '"What\'s wrong?"'],
    sourceFront: "/assets/leaflet-front/4.jpeg",
    sourceBack: "/assets/leaflet-back/4.jpeg",
    backParagraphs: [
      [
        "Once we've ",
        strong("stopped complaining"),
        " about what's wrong, let's go one step further: look for ",
        strong("WHAT'S MISSING"),
        " instead."
      ],
      [
        'What you perceive as "wrong" is actually missing some pieces that will make it ',
        strong("right"),
        "."
      ]
    ],
    bullets: [
      ["Turn reactions into questions."],
      ["Approach the person positively with a request for help."],
      ["Be clearer on your requirements instead of pointing fingers."],
      ['Find out the "why."'],
      ["Instead of what's wrong, identify what's missing in relation to fulfilling a commitment."]
    ]
  },
  {
    id: 5,
    topic: "Breakdowns",
    color: "#c6074b",
    accent: "#a40540",
    icon: "breakdown",
    frontLines: ["I declare", "breakdowns"],
    sourceFront: "/assets/leaflet-front/5.jpeg",
    sourceBack: "/assets/leaflet-back/5.jpeg",
    backParagraphs: [
      [
        "Breakdowns are not problems, they REVEAL WHAT'S MISSING to fulfill our commitments."
      ],
      [
        "This means raising any blocking point towards fulfilling a commitment, and often, it is the stepping-stone to great achievements."
      ]
    ],
    bullets: [
      ["Identify risks early."],
      ["Ask for help and enable focus on solving the issue."],
      ["Notify everyone involved."],
      [
        "Be transparent & comfortable, there is no blame in declaring breakdowns (the blame would be if you don't say anything)."
      ]
    ]
  },
  {
    id: 6,
    topic: "Generous listening",
    color: "#9fcbe1",
    accent: "#79aec7",
    icon: "ear",
    frontLines: [
      "I choose",
      "generous listening",
      "over already",
      "listening, centering,",
      "and granting trust"
    ],
    sourceFront: "/assets/leaflet-front/6.jpeg",
    sourceBack: "/assets/leaflet-back/6.jpeg",
    backParagraphs: [
      [
        "By practicing ",
        strong("GENEROUS LISTENING"),
        " in your day-to-day life, listening openly without all of our past preconceived notions and ideas, you'll find out how easy it is to truly ",
        strong("understand"),
        " people."
      ]
    ],
    bullets: [
      ["Listen fully, without bias or interpretations."],
      ["Don't think about your reply while the other is still talking."],
      ["Don't listen to respond, listen to learn!"],
      ["Show empathy."],
      ["Find the value in each conversation."],
      ["Listening doesn't mean waiting for your turn to talk or speaking."]
    ]
  },
  {
    id: 7,
    topic: "Responsibility",
    color: "#cf8c08",
    accent: "#a87407",
    icon: "responsibility",
    frontLines: [
      "I am committed",
      "to be responsible",
      "for more than I am",
      "accountable for"
    ],
    sourceFront: "/assets/leaflet-front/7.jpeg",
    sourceBack: "/assets/leaflet-back/7.jpeg",
    backParagraphs: [
      [
        "Being ",
        strong("responsible"),
        " is a choice, it's your ABILITY TO RESPOND (response-ability)."
      ],
      [
        "While being ",
        strong("accountable"),
        " is an agreement of who will take care of the task, it means people are COUNTING ON YOU (count-on-ability)."
      ]
    ],
    bullets: [
      [
        "Take the responsibility to help when you have the expertise (even when you are not accountable)."
      ],
      ["Sharing accountability in Travel Channels is an opening to new opportunities."],
      ["Example: Live Travel Space is everyone's responsibility."]
    ]
  },
  {
    id: 8,
    topic: "Feedback",
    color: "#68108b",
    accent: "#520d70",
    icon: "feedback",
    frontLines: [
      "I give constructive",
      "feedback that is",
      "future-driven and",
      "result-oriented"
    ],
    sourceFront: "/assets/leaflet-front/8.jpeg",
    sourceBack: "/assets/leaflet-back/8.jpeg",
    backParagraphs: [
      [
        "Feedback should always be taken as an ",
        strong("OPPORTUNITY TO GROW"),
        ", whether it's for highlighting achievements or areas for ",
        strong("improvement"),
        "."
      ],
      ["So, let's stop being afraid of giving and receiving ", strong("feedback"), "."]
    ],
    bullets: [
      ["Be specific and factual."],
      ["Be straight to the point, future-driven and result-oriented."],
      ["Don't take it personally, feedback at work is about work."],
      ["Be open & positive."]
    ]
  }
];
