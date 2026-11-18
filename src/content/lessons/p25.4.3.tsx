import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { AnonSetViz } from "@/components/viz/AnonSetViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p25.4.3",
  minutes: 90,
  links: {
    revisits: ["p25.4.2", "p5.3.3", "p7.3.5"],
    foreshadows: ["p26.3.1", "p30.4.2", "p30.1.1"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;If you have nothing to hide, you have nothing to fear.&rsquo; Yet most people close the bathroom door, keep
        a diary private and would be uneasy if a stranger read their messages, though nothing in them is shameful. What is
        privacy protecting, if not secrets?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A data set is released with names removed. Choose which other facts it includes, and see how many people share your
        combination.
      </p>
      <AnonSetViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the right to privacy">
        <p>
          Samuel Warren and Louis Brandeis argued in 1890, worried about gossip papers and the new portable camera, for a
          &lsquo;right to be let alone&rsquo;. Judith Jarvis Thomson later argued that privacy is not a separate right at
          all: every violation of privacy violates some other right, over one&rsquo;s body or property. Others reply that
          this misses what is distinctive in, say, being watched through a telescope.
        </p>
      </Definition>

      <Definition title="privacy and relationships">
        <p>
          James Rachels argued that privacy matters because it lets us have different relationships with different people.
          What we share with a doctor, a friend or a spouse differs, and controlling the flow of information about ourselves
          is part of what makes those relationships what they are.
        </p>
      </Definition>

      <Definition title="contextual integrity">
        <p>
          Helen Nissenbaum&rsquo;s theory of <strong>contextual integrity</strong> says privacy is violated when information
          flows in ways that break the norms of the context in which it was shared. Medical details flowing from patient to
          doctor are fine; the same details flowing to an employer are not. This explains why gathering public facts can still
          violate privacy: each fact is public, but the combined profile flows somewhere new.
        </p>
      </Definition>

      <Example title="privacy in India">
        <p>
          In <em>Justice K. S. Puttaswamy v. Union of India</em> (2017), a nine-judge bench of the Supreme Court held
          unanimously that privacy is a fundamental right under the Constitution, protected as part of life and personal
          liberty. The case arose from challenges to the Aadhaar identity scheme. The Digital Personal Data Protection Act
          followed in 2023.
        </p>
      </Example>

      <Remark title="nothing to hide">
        <p>
          Daniel Solove argues that the &lsquo;nothing to hide&rsquo; argument assumes privacy is only about concealing wrongs.
          But surveillance also chills speech, shifts power to those who watch, and allows errors to be acted on without the
          subject knowing. As the visualisation shows, removing names does not make data anonymous.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "wb",
      rung: "check",
      prompt: <p>How did Warren and Brandeis describe the right to privacy?</p>,
      answer: { kind: "choice", options: ["As the right to be let alone", "As a property right in data", "As a duty of the state to watch over citizens", "As freedom of the press"], correct: [0] },
    },
    {
      key: "ci",
      rung: "check",
      prompt: <p>According to contextual integrity, when is privacy violated?</p>,
      answer: { kind: "choice", options: ["When information flows against the norms of the context in which it was shared", "Whenever information is recorded", "Only when secrets are revealed", "Only when the law is broken"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, release postcode and sex only. How many people are expected to share your combination, you included?</p>,
      answer: { kind: "numeric", value: 2500, tolerance: 1 },
    },
    {
      key: "thom",
      rung: "apply",
      prompt: <p>What is Thomson&rsquo;s view of the right to privacy?</p>,
      answer: { kind: "choice", options: ["Every violation of it is a violation of some other right, such as over one’s body or property", "It is the most basic of all rights", "It does not exist in any form", "It belongs only to public figures"], correct: [0] },
    },
    {
      key: "india",
      rung: "apply",
      prompt: <p>What did the Supreme Court of India hold in the Puttaswamy case in 2017?</p>,
      answer: { kind: "choice", options: ["That privacy is a fundamental right under the Constitution", "That Aadhaar must be abolished", "That there is no right to privacy", "That privacy applies only to the home"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does someone with nothing to hide have any reason to object to surveillance? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the nothing-to-hide argument fairly.",
          "Considers at least one account of why privacy matters, such as relationships, autonomy, power or contextual integrity.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If every fact in a profile is public, can compiling the profile violate privacy?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the case of aggregating public information.",
          "Uses an account such as contextual integrity or re-identification.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Philosophers talk constantly of what must be so, what might have been, what is known and what ought to be done. A
        single formal idea, a set of worlds with some of them visible from others, can make all of these precise.
      </p>
      <p>Next, the course on modal logic begins with Kripke semantics.</p>
    </>
  ),
};
