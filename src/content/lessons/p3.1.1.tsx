import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MarkerSpotViz, type MarkerPassage } from "@/components/viz/MarkerSpotViz";
import type { LessonContent } from "@/lib/types";

const PASSAGES: MarkerPassage[] = [
  {
    title: "The library",
    parts: [
      "The library should open on Sundays, ",
      { w: "since", role: "reason", why: "It introduces a reason for opening on Sundays. Try replacing it with 'and the evidence is that'; the sense survives." },
      " most students study at weekends and the reading rooms are full on Saturdays. ",
      { w: "Since", role: "not a marker", why: "Here 'since' means 'from that time on'. It dates the change; it gives no reason for anything." },
      " the new timetable began, Saturday visits have doubled. ",
      { w: "So", role: "conclusion", why: "'So' presents what follows as drawn from what came before." },
      " the demand is plainly there.",
    ],
  },
  {
    title: "The heater",
    parts: [
      "The room was ",
      { w: "so", role: "not a marker", why: "'So cold' means 'very cold'. It intensifies an adjective; nothing is inferred." },
      " cold that the pipes froze. The heater must be broken, ",
      { w: "because", role: "reason", why: "It gives our evidence that the heater is broken. The broken heater is the conclusion, not something we already accept." },
      " it was on all night and the room is still freezing. The pipes froze ",
      { w: "because", role: "not a marker", why: "This 'because' gives a cause. Nobody doubts that the pipes froze; the sentence explains why, so it is an explanation, not an argument." },
      " the temperature fell below zero.",
    ],
  },
  {
    title: "The witness",
    parts: [
      "The witness says she saw the defendant at the station at nine. But the station camera shows the platform empty at nine, ",
      { w: "which shows that", role: "conclusion", why: "What comes after it is drawn from what came before. A conclusion marker can sit in the middle of a sentence." },
      " her memory is mistaken. ",
      { w: "After all", role: "reason", why: "'After all' adds a further reason, usually one the listener is expected to accept already." },
      ", she admitted she had not slept for two days. ",
      { w: "Therefore", role: "conclusion", why: "The final conclusion, drawn from the mistaken memory and the other evidence." },
      " her evidence should be set aside.",
    ],
  },
];

export const lesson: LessonContent = {
  id: "p3.1.1",
  minutes: 55,
  links: {
    revisits: ["p0.2.3", "p2.1.1"],
    foreshadows: ["p3.3.3", "p16.5.1"],
  },

  puzzle: (
    <>
      <p>Compare these two sentences.</p>
      <ol>
        <li>&ldquo;Since you left, it has rained every day.&rdquo;</li>
        <li>&ldquo;Since you left, someone else will have to lock up.&rdquo;</li>
      </ol>
      <p>
        The same word opens both. In one it tells you when; in the other it tells you why you should believe something. A
        reader who mixes them up will find arguments where there are none, and miss arguments where there are. What
        signals reasoning in ordinary language, and how reliable are the signals?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Speakers rarely announce &ldquo;premise one&rdquo; and &ldquo;conclusion&rdquo;. Instead they use small words that
        mark the job a clause is doing: &ldquo;because&rdquo; and &ldquo;since&rdquo; flag reasons, &ldquo;so&rdquo; and
        &ldquo;therefore&rdquo; flag what is drawn from them. These words are like road signs. They are very useful, but the
        same shapes appear on other signs too, and some roads have none.
      </p>
      <p>Click each highlighted word to say what it marks, then check.</p>
      <MarkerSpotViz passages={PASSAGES} />
    </>
  ),

  theory: (
    <>
      <Definition title="argument markers">
        <p>
          An <strong>argument marker</strong> is an expression that shows that an argument is being given, and which part
          of it is which.
        </p>
        <ul>
          <li>
            <strong>Reason markers</strong> introduce premises: because, since, for, as, given that, seeing that, after
            all, on the grounds that, the evidence is that.
          </li>
          <li>
            <strong>Conclusion markers</strong> introduce conclusions: so, therefore, thus, hence, consequently,
            accordingly, which shows that, it follows that, we may infer that.
          </li>
        </ul>
        <p>
          A reason marker points from a premise to the conclusion it supports, wherever that conclusion sits. In
          &ldquo;Q because P&rdquo; the conclusion comes first; in &ldquo;P, so Q&rdquo; it comes last.
        </p>
      </Definition>

      <Remark title="a substitution test">
        <p>
          Many of these words have other jobs. &ldquo;Since&rdquo; also marks time, &ldquo;so&rdquo; also means
          &ldquo;very&rdquo; or &ldquo;in order that&rdquo;, &ldquo;as&rdquo; also means &ldquo;while&rdquo; or
          &ldquo;like&rdquo;. To test a word, replace it with a marker that has no other use. If &ldquo;since&rdquo; can
          become &ldquo;given that&rdquo; without changing the sense, it marks a reason; if it must become &ldquo;from the
          time when&rdquo;, it does not.
        </p>
      </Remark>

      <Remark title="because: reasons and causes">
        <p>
          &ldquo;Because&rdquo; is the trickiest word of all, since it introduces both reasons and causes. &ldquo;The pipes
          froze because the temperature fell below zero&rdquo; gives a cause of something nobody doubts. It is an
          explanation. &ldquo;The heater must be broken, because the room is still cold&rdquo; gives evidence for something
          in doubt. It is an argument. The test, as in Logic I, is whether the speaker is trying to make you believe the
          claim or to tell you why it is so. Often the clue is a word like &ldquo;must&rdquo;, which signals an inference.
        </p>
      </Remark>

      <Definition title="standard form">
        <p>
          To lay an argument out in <strong>standard form</strong>, write its premises on numbered lines, then a line, then
          the conclusion, with markers removed. If one conclusion is then used as a premise for another, call it a{" "}
          <strong>sub-conclusion</strong> and number the lines so that each step shows what it is drawn from.
        </p>
      </Definition>

      <Example title="the witness, in standard form">
        <ol>
          <li>The witness says she saw the defendant at the station at nine.</li>
          <li>The station camera shows the platform empty at nine.</li>
          <li>She had not slept for two days.</li>
          <li>So her memory of nine o&rsquo;clock is mistaken. (from 1, 2 and 3)</li>
          <li>Therefore her evidence should be set aside. (from 4)</li>
        </ol>
        <p>
          The step from 4 to 5 needs an unstated premise, roughly that evidence from a mistaken memory should be set aside.
          Marking it brings out a point a lawyer might contest: perhaps her memory is mistaken about the time but not about
          the person.
        </p>
      </Example>

      <Remark title="arguments without markers, and markers without arguments">
        <p>
          Many arguments carry no markers at all: &ldquo;Take an umbrella. The forecast says heavy rain.&rdquo; Then you
          rely on context: which claim is in question, and which are offered in its favour? Conversely, an
          &ldquo;if &hellip; then&rdquo; sentence is not an argument, though it looks like one. &ldquo;If the forecast is
          right, it will rain&rdquo; asserts neither that the forecast is right nor that it will rain. It is a single
          statement, which may serve as one premise of an argument.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "concl",
      rung: "check",
      prompt: <p>Which of these are conclusion markers? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["therefore", "because", "hence", "given that"], correct: [0, 2] },
    },
    {
      key: "since",
      rung: "check",
      prompt: <p>In which sentence does &ldquo;since&rdquo; mark a reason?</p>,
      answer: {
        kind: "choice",
        options: [
          "Since March, the shop has opened late.",
          "Since the shop opens late, we can go after work.",
          "She has not called since the party.",
          "It has been years since we met.",
        ],
        correct: [1],
      },
    },
    {
      key: "ifthen",
      rung: "apply",
      prompt: <p>&ldquo;If the bridge is closed, the bus will be late.&rdquo; Is this an argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes: the premise is that the bridge is closed.",
          "Yes: the conclusion is that the bus will be late.",
          "No: it is a single conditional statement, asserting neither part.",
          "No: it is an explanation.",
        ],
        correct: [2],
      },
    },
    {
      key: "middle",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;The ink on the letter is a kind not sold before 1950, which shows that the letter cannot be from 1920. The
          family story is wrong, then.&rdquo; What is the final conclusion?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The ink is a kind not sold before 1950.",
          "The letter cannot be from 1920.",
          "The family story is wrong.",
          "The letter is from after 1950.",
        ],
        correct: [2],
      },
    },
    {
      key: "count",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;We should take the train, since it is cheaper than flying, it produces less carbon, and, after all, the
          station is closer than the airport.&rdquo; How many premises are stated?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "standard",
      rung: "prove",
      prompt: (
        <p>
          Put this passage into standard form, marking the sub-conclusion: &ldquo;Ravi can&rsquo;t have written the
          email. It was sent at 3 a.m., and Ravi was on a night flight with no wifi, so he had no way to send anything
          then.&rdquo;
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Lists the premises: the email was sent at 3 a.m.; Ravi was on a night flight with no wifi at that time.",
          "Identifies the sub-conclusion: Ravi had no way to send anything at 3 a.m.",
          "Identifies the final conclusion: Ravi did not write the email, and shows it drawn from the sub-conclusion and the time of sending.",
          "Small differences in wording, or a reasonable unstated premise added, are fine.",
        ],
      },
    },
    {
      key: "friends",
      rung: "stretch",
      prompt: (
        <p>
          Write two short sentences that both use &ldquo;so&rdquo; or &ldquo;as&rdquo; without marking an argument, and
          one that uses the same word to mark one. Then explain how a reader can tell the difference, using the
          substitution test or another test of your own.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives two sentences where the word has a non-argumentative sense, such as 'so tall', 'so that', 'as she left' or 'as a child'.",
          "Gives one sentence where the word marks a conclusion or a reason.",
          "Explains a sensible test, such as replacing the word with 'therefore' or 'given that' and seeing whether the sense survives. Any reasonable test is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend which words signal premises and conclusions, why the same words sometimes do other jobs, and how to tell an argument from an explanation when the word is 'because'.",

  glimpse: (
    <p>
      The next lessons look at the other small words that shape an argument&rsquo;s strength. Later in this course, the
      line between argument and explanation becomes a method of its own: inference to the best explanation. Philosophy of
      Science asks what makes an explanation scientific at all.
    </p>
  ),
};
