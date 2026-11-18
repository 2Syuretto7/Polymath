import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { NameCascadeViz } from "@/components/viz/NameCascadeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p21.1.3",
  minutes: 80,
  links: {
    revisits: ["p21.1.2", "p21.1.1", "p0.3.2"],
    foreshadows: ["p21.2.2", "p21.5.1", "p21.3.1"],
  },

  puzzle: (
    <>
      <p>
        A company calls its layoffs &lsquo;rightsizing&rsquo;. A government calls a war a &lsquo;special operation&rsquo;. A
        parent who neglects a child is still called &lsquo;father&rsquo;. When words stop fitting what they name, is that
        merely a matter of style, or does it damage the order of a society?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Follow Confucius&rsquo;s chain of consequences, with names correct and not.</p>
      <NameCascadeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="zhengming">
        <p>
          <strong>Zhengming</strong>, the rectification or correction of names, comes from Analects 13.3. Asked what he would
          do first in government, Confucius said: correct names. &ldquo;If names are not correct, speech will not accord with
          things; if speech does not accord, affairs will not succeed&rdquo;, and so on, until the people &ldquo;do not know
          where to put hand or foot&rdquo;.
        </p>
      </Definition>

      <Example title="let the ruler be a ruler">
        <p>
          Duke Jing of Qi asked about government. Confucius replied: &ldquo;Let the ruler be a ruler, the minister a minister,
          the father a father, the son a son&rdquo; (12.11). A role-name carries duties: to be called &lsquo;father&rsquo; and
          not act as one is a kind of falsehood. Correcting names means bringing conduct into line with roles, and roles into
          line with the words that describe them.
        </p>
      </Example>

      <Definition title="later developments">
        <p>
          Xunzi wrote a chapter on correcting names, holding that names are fixed by convention, which rulers should
          establish and guard. Mohist logicians studied how names pick out kinds. Legalists turned the idea into &lsquo;form
          and name&rsquo; (xingming): officials are judged by whether their deeds match their stated duties exactly.
        </p>
      </Definition>

      <Remark title="description or prescription?">
        <p>
          Is zhengming about making words fit the world, or the world fit the words? Both: the names describe roles, and the
          roles prescribe conduct. Critics see a conservative doctrine that freezes hierarchy; defenders read it as a demand
          for honesty in public language, a demand that later writers such as Orwell made in their own terms.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "first",
      rung: "check",
      prompt: <p>What did Confucius say he would do first in government?</p>,
      answer: { kind: "choice", options: ["Correct names", "Raise an army", "Lower taxes", "Build temples"], correct: [0] },
    },
    {
      key: "roles",
      rung: "check",
      prompt: <p>What did Confucius tell Duke Jing about government?</p>,
      answer: { kind: "choice", options: ["Let the ruler be a ruler, the minister a minister, the father a father, the son a son", "Punish crimes severely", "Love all people equally", "Do nothing, and all will be done"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many links does the chain from names to the people have, counting both ends?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "father",
      rung: "apply",
      prompt: <p>A man neglects his children. In Confucian terms, what is wrong with still calling him &lsquo;father&rsquo;?</p>,
      answer: { kind: "choice", options: ["The name carries duties he does not fulfil, so name and reality do not match", "Nothing; it is a biological fact", "He should be called by his given name", "Only his children may judge"], correct: [0] },
    },
    {
      key: "legal",
      rung: "apply",
      prompt: <p>How did the Legalists use the idea of matching names?</p>,
      answer: { kind: "choice", options: ["To judge officials by whether their deeds matched their stated duties", "To reform the calendar", "To classify plants", "To abolish titles"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does misusing words cause social disorder, or only reflect it? Argue briefly, using zhengming.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Confucius’s chain from incorrect names to disorder.",
          "Considers the reverse view, that disorder comes first and language follows it, or an example of euphemism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the rectification of names conservative, or can it be used to criticise those in power? Discuss.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes how it can support fixed hierarchy.",
          "Notes how it can condemn a ruler who does not act as a ruler, as Mencius later argued.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Confucius taught that care begins at home and extends outwards, with special duties to family. A rival school found
        this partiality the root of the world&rsquo;s harms.
      </p>
      <p>
        Next, the Mohists and impartial care: Mozi&rsquo;s argument that we should care for others&rsquo; families as for our
        own, his consequentialist test of benefit to the people, and his attack on lavish Confucian rituals.
      </p>
    </>
  ),
};
