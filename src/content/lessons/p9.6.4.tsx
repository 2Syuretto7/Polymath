import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "The world is a fixed, finite quantity of force.",
    kind: "premise",
    note: "From Nietzsche's notebooks of the 1880s, influenced by the conservation of energy. He never published this argument.",
  },
  {
    claim: "So the world can pass through only a finite number of combinations of states.",
    kind: "inference",
    note: "Finitely many centres of force, in finitely many arrangements.",
    objection: "Georg Simmel: three wheels turning at speeds in irrational ratios never return to the same configuration. Finitely many things can have infinitely many states.",
  },
  {
    claim: "Time is infinite, and the world has no final state of equilibrium.",
    kind: "premise",
    note: "If a final state were possible, it would already have been reached in the infinite past.",
  },
  {
    claim: "So every combination of states must already have occurred, and must recur, infinitely many times.",
    kind: "inference",
    note: "A pigeonhole argument over infinite time.",
    objection: "Even granting finitely many states, an infinite sequence could repeat some states and avoid others forever, or never repeat as a whole cycle.",
  },
  {
    claim: "So this very life will return, with every pain and joy, in exactly the same order.",
    kind: "conclusion",
    note: "The cosmological version of the thought. Most readers now take the published, practical version to be the important one.",
    objection: "Would the person living the repetition be me? With no memory linking the cycles, the return may be no different, for me, from simple ending.",
  },
];

export const lesson: LessonContent = {
  id: "p9.6.4",
  minutes: 80,
  links: {
    revisits: ["p9.6.3", "p9.3.2", "p1.6.3"],
    foreshadows: ["p9.6.5", "p19.6.1", "p11.6.2"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;What if some day or night a demon were to steal after you into your loneliest loneliness and say to you: this
        life as you now live it and have lived it, you will have to live once more and innumerable times more, and there will
        be nothing new in it.&rdquo; Would you throw yourself down and curse the demon? Or have you ever experienced a moment
        in which you would answer: you are a god, and never have I heard anything more divine?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Nietzsche&rsquo;s notebooks contain an attempt to prove that everything recurs. Step through it and challenge the steps
        that critics attacked.
      </p>
      <ArgumentStepViz steps={STEPS} title="The cosmological argument for recurrence" />
    </>
  ),

  theory: (
    <>
      <Definition title="eternal recurrence">
        <p>
          The thought that everything that happens will happen again, exactly the same, infinitely many times. Nietzsche
          introduced it in The Gay Science 341 (1882) as &ldquo;the greatest weight&rdquo;, and called it the fundamental
          conception of Thus Spoke Zarathustra.
        </p>
      </Definition>

      <Example title="the practical reading">
        <p>
          Read as a test, the thought asks: could you will your life to recur without changing anything? It is the opposite of
          Schopenhauer&rsquo;s verdict that life should never have been. To answer yes is to affirm one&rsquo;s whole life,
          including its suffering, since every moment is bound to every other. Whether recurrence is true matters less than
          what one&rsquo;s response reveals.
        </p>
      </Example>

      <Definition title="amor fati">
        <p>
          &ldquo;My formula for greatness in a human being is amor fati: that one wants nothing to be different, not forward, not
          backward, not in all eternity. Not merely bear what is necessary, still less conceal it, but love it.&rdquo; (Ecce
          Homo.) Love of fate is the attitude that welcomes the demon&rsquo;s message.
        </p>
      </Definition>

      <Remark title="questions">
        <p>
          Does the test even make sense? If everything recurs identically, my choice now changes nothing about the cycle, yet
          the thought is meant to change how I live. Some readers answer that it works as a standard for evaluating a life, not
          a cause; others that Nietzsche sought a this-worldly substitute for the eternity of religion. The demand to affirm
          every horror in history also seems morally troubling, a worry Nietzsche faced through Zarathustra&rsquo;s nausea at the
          return of the small man.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "where",
      rung: "check",
      prompt: <p>Where did Nietzsche first publish the thought of eternal recurrence, through the image of the demon?</p>,
      answer: {
        kind: "choice",
        options: ["The Birth of Tragedy", "The Gay Science", "On the Genealogy of Morals", "Twilight of the Idols"],
        correct: [1],
      },
    },
    {
      key: "amor",
      rung: "check",
      prompt: <p>What does amor fati mean?</p>,
      answer: {
        kind: "choice",
        options: ["Fear of fate", "Love of fate: wanting nothing to be different", "Resignation to fate", "Control over fate"],
        correct: [1],
      },
    },
    {
      key: "simmel",
      rung: "apply",
      prompt: <p>Which step of the cosmological argument does Simmel&rsquo;s example of the wheels attack?</p>,
      answer: {
        kind: "choice",
        options: [
          "That time is infinite.",
          "That finitely many things can be in only finitely many states.",
          "That the world is force.",
          "That this life will return.",
        ],
        correct: [1],
      },
    },
    {
      key: "test",
      rung: "apply",
      prompt: <p>On the practical reading, what does the thought of recurrence test?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whether the universe is finite.",
          "Whether one can affirm one's life as a whole, willing it again unchanged.",
          "Whether one believes in God.",
          "Whether one remembers past lives.",
        ],
        correct: [1],
      },
    },
    {
      key: "schop",
      rung: "apply",
      prompt: <p>How does the affirmation of recurrence answer Schopenhauer?</p>,
      answer: {
        kind: "choice",
        options: [
          "It agrees that life should be denied.",
          "It reverses his verdict: instead of wishing life had never been, one wills it again and again.",
          "It ignores suffering.",
          "It shows that suffering does not exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>If the demon&rsquo;s claim were false, would the test lose its point? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes the cosmological claim from the practical test.",
          "Explains how the test could work as a thought experiment, or why it might need belief in recurrence.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "you",
      rung: "stretch",
      prompt: <p>Should a person who has suffered greatly be expected to affirm the recurrence of their life? What does your answer suggest about Nietzsche&rsquo;s ideal?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes the difficulty seriously, such as the demand to will one's own or others' worst suffering again.",
          "Considers Nietzsche's reasons, such as that every moment is bound to every other, so affirming any joy means affirming all.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the thought of eternal recurrence, the demon passage, the difference between the cosmological argument and the practical test, Simmel's objection, and amor fati.",

  glimpse: (
    <p>
      The next lesson turns to the &Uuml;bermensch, the figure who could affirm recurrence. Camus&rsquo;s Sisyphus later asks
      a similar question about a life of endless repetition, and metaphysics debates the nature of time.
    </p>
  ),
};
