import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { IntentionViz } from "@/components/viz/IntentionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p6.3.3",
  minutes: 80,
  links: {
    revisits: ["p6.3.2", "p6.1.2", "p1.3.3"],
    foreshadows: ["p6.4.4", "p13.4.3", "p13.5.2"],
  },

  puzzle: (
    <>
      <p>
        Peter Abelard was the most famous teacher in Paris in the 1110s, drawing students from all over Europe, and he
        knew it. His love affair with his student Heloise, herself a formidable scholar, ended in a secret marriage, a
        violent attack by her uncle&rsquo;s men, and both of them entering religious life. Their letters are still read. He
        was twice condemned for heresy. In a book called Know Yourself he asked a question that sounds modern: if two
        people do exactly the same thing, can one be guilty and the other innocent?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each case gives two people whose situations look alike, or unlike, from outside. Judge them first by the deed, then
        by Abelard&rsquo;s test.
      </p>
      <IntentionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the ethics of intention">
        <p>
          Abelard distinguishes the <strong>vice</strong>, a disposition of the mind that inclines one to sin, such as a
          quick temper; the <strong>desire</strong> for something wrong; the <strong>consent</strong> to act on it; and the{" "}
          <strong>deed</strong>. Sin, he says, lies in consent alone: in consenting to what one believes to be contrary to
          God&rsquo;s will, an act of contempt for God. Having a vice is not a sin, since it can be resisted, and resisting
          it is meritorious. Desire is not a sin either. And the deed adds nothing to guilt.
        </p>
      </Definition>

      <Example title="human justice and divine justice">
        <p>
          If the deed adds nothing, why do courts punish deeds? Abelard answers that human judges cannot see intentions, and
          must protect the community, so they rightly punish what is done and its harm. God, who sees the heart, judges
          the consent. So a person may be justly punished by a court for what was not a sin, and a person who sinned may
          rightly go unpunished by any court.
        </p>
      </Example>

      <Definition title="universals and words">
        <p>
          On universals, Abelard argued against both William of Champeaux&rsquo;s realism and the cruder nominalism of
          Roscelin. Only individuals exist, so a universal is not a thing. But a universal word is not empty either: it is
          imposed on many things because of a real <strong>status</strong> they share, such as being human, which is not
          itself a thing. The word signifies through a general concept in the mind. Whether this is best called
          nominalism or conceptualism is still debated.
        </p>
      </Definition>

      <Remark title="yes and no">
        <p>
          In Sic et Non, Yes and No, Abelard collected 158 questions on which authorities, the Bible and the Church
          Fathers, seemed to contradict each other, and set the passages side by side without resolving them. His preface
          gave rules for interpretation: check the text, the context, and the sense of the words; and if a conflict
          remains, use reason. &ldquo;By doubting we come to inquiry, and by inquiry we perceive the truth.&rdquo; The
          method of setting out opposed authorities and resolving them became the backbone of scholastic teaching, as in
          Aquinas&rsquo;s Summa.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sin",
      rung: "check",
      prompt: <p>Where, according to Abelard, does sin lie?</p>,
      answer: {
        kind: "choice",
        options: ["In the outward deed", "In consenting to what one believes contrary to God's will", "In having desires", "In having vices"],
        correct: [1],
      },
    },
    {
      key: "sicetnon",
      rung: "check",
      prompt: <p>What did Abelard&rsquo;s Sic et Non do?</p>,
      answer: {
        kind: "choice",
        options: [
          "It refuted the Church Fathers.",
          "It set side by side authorities that seemed to contradict one another, with rules for interpreting them.",
          "It proved God's existence.",
          "It was a book of poems.",
        ],
        correct: [1],
      },
    },
    {
      key: "judges",
      rung: "apply",
      prompt: (
        <p>
          Two judges hang the same guilty criminal, one from love of justice, one from hatred. What would Abelard say?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Both act equally well, since the deed is the same.",
          "The first acts well and the second sins, since their intentions differ.",
          "Both sin, since killing is wrong.",
          "Neither is responsible.",
        ],
        correct: [1],
      },
    },
    {
      key: "locked",
      rung: "apply",
      prompt: (
        <p>
          A person sets out to steal but finds the door locked. Another succeeds. How does Abelard compare their guilt
          before God?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The successful thief is more guilty.",
          "They are equally guilty, since both consented.",
          "Neither is guilty.",
          "Only the first is guilty.",
        ],
        correct: [1],
      },
    },
    {
      key: "status",
      rung: "apply",
      prompt: <p>What grounds the use of a universal word such as human, for Abelard?</p>,
      answer: {
        kind: "choice",
        options: [
          "A real thing, humanity, present in each human.",
          "Nothing at all; the word is arbitrary.",
          "A status the individuals share, such as being human, which is not itself a thing.",
          "A Platonic Form.",
        ],
        correct: [2],
      },
    },
    {
      key: "moralluck",
      rung: "prove",
      prompt: (
        <p>
          Abelard holds that the failed thief and the successful thief are equally guilty. Give an argument for this view and
          an argument against it, and say which is stronger.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives an argument for: the difference in outcome was a matter of luck, beyond either person's control, so it cannot affect guilt.",
          "Gives an argument against, such as the harm done or our ordinary practice of blame, and reaches a reasoned view.",
        ],
      },
    },
    {
      key: "ignorance",
      rung: "stretch",
      prompt: (
        <p>
          Abelard concluded that those who act wrongly in ignorance, believing they act well, do not sin. Is this a
          strength or a weakness of his ethics? Consider a person who sincerely believes that cruelty is required of them.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains why the view follows from locating sin in consent to what one believes wrong.",
          "Assesses the troubling case, for example by distinguishing culpable from non-culpable ignorance, and reaches a view.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Abelard's view that sin lies in consent, his distinction between vice, desire, consent and deed, how he reconciled it with human punishment, and the method of Sic et Non.",

  glimpse: (
    <p>
      The next chapter turns to Aquinas, who joined Aristotle to Christian theology. The question of moral luck, which
      Abelard faced, returns in the Moral Philosophy course.
    </p>
  ),
};
