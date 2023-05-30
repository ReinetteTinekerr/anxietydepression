'use client'

import { useSearchParams } from "next/navigation"

// import { ScoreContext, ScoreContextType } from "@/app/context/scoreContext"
// import { useContext } from "react"

export default function Summary() {
    const searchParams = useSearchParams()
    const score = searchParams.get('score')
    const summary = searchParams.get('summary')
    const level = searchParams.get('level')

    const beckType = () => {
        if (summary === '0') {
            return 'Anxiety'
        }
        return 'Depression'
    }
    const BeckDescription = () => {
        if (beckType() === 'Anxiety') {
            if (level === '0') {
                return <div>
                    <span className="font-bold text-xl">Low</span>
                    <div>According to your test results, you have a very low anxiety level. In fact, it is much lower than most people&apos;s. This is most likely a result of your positive attitude, high self-esteem and well-developed coping skills and strategies. You are able to keep stressful events in perspective whether it&apos;s through the sheer will of your inner strength, or some other anxiety-relieving strategy. Whatever the case, when things cause you anxiety, you seem to handle them quite well. Others probably admire your ability to keep it together, and may even turn to you in their own times of crisis. Just remember that if you do occasionally get stressed like the rest of the world, that&apos;s OK - you&apos;re only human.</div>
                    <div><br />That is usually a good thing. However, It is possible that you might be unrealistic in either your assessment which whould be denial or that you have learned to mask the symptoms commonly associated with anxiety, Too little anxiety could indicate that you are detached from yourself, others, or your environment.</div>
                </div>
            } else if (level === '1') {
                return <div>
                    <span className="font-bold text-xl">Moderate</span>
                    <div>According to your test results, your level of anxiety is moderate, which means there is a risk that it could become a problem in your life. Although you are generally able to cope, your stress and worry might sometimes interfere with your ability to function in your everyday life. This is nothing to beat yourself up about - anxiety is a very common problem with a wide range of causes. The most important thing however, is that you take active steps to decrease the frequency and intensity of these emotions, so that they don&apos;t dictate the way you carry out your life. Educate yourself by reading informative sources on the subject. You can start by checking out the Advice and Tips section, but if you feel unable to deal with these anxious feelings on your own, don&apos;t hesitate to seek professional help.</div>
                    <div><br />Your body is trying to tell you something. Look for pattern as to when and why you experience the symptoms described above. For example, IF it occurs prior to public speaking and your job requires a lot presentations you may want to find ways to calm yourself before speaking or let others do some of the presentations. You may have some conflict Issues that need to resolved. Clearly, it is not panic time, but you want to find ways to manage the stress you feel</div>
                </div>

            } else {
                return <div>
                    <span className="font-bold text-xl">Severe</span>
                    <div>According to your score on the Anxiety Test, you are very anxious; in fact, more anxious than 90% of the population. Your anxiety seems to have become problematic in your day-to-day life, as you have surely realized at this point. It could be holding you back from doing necessary things, putting a damper on experiences that have the potential to be wonderful, or causing some problems in your relationships. Anxiety can also seriously interfere with your job performance and lead to stress-related health issues, or limit your social activities so that you miss out on fun opportunities. The good news is that things don&apos;t have to be this way. Step one on the road to recovery is realizing that suffering from anxiety is not your fault. It may be a result of difficult life events, learned coping patterns, unhealthy attitudes or even biological factors. Moreover, you are not alone - a large percentage of people suffer from various degrees of anxiety. Consider talking to a professional who can help you get over your anxious feelings.</div>
                    <div><br />Is a potential cause for concern. Again, look for patterns or times when you tend to feel the symptoms you have circled. Persistent and high anxiety is not a sign of personal weakness or failure. It is, however, something that needs to be proactively threated or there could be significant impacts to you mentally and physically. You may want to consult a physician or counselor if the feeling persist.</div>
                </div>
            }
        } else {
            switch (level) {
                case '0':
                    return <div>
                        <span className="font-bold text-xl">Consider Normal!</span>
                        <div>You show absolutely no signs of depression. Indeed, you seem like one of the happiest people around. Way to go! Keep your spirits up!</div>
                    </div>
                case '1':
                    return <div>
                        <span className="font-bold text-xl">Mild Mood Disturbance</span>
                        <div>- You show some mild symptoms of depression. It does not seem to be serious, but keep an eye on the symptoms listed in your results. If they get any worse or persist for a prolonged period of time (weeks or months), you should consider consulting a physician. It would not hurt to talk about it when you see your doctor the next time.</div>
                    </div>
                case '2':
                    return <div>
                        <span className="font-bold text-xl">Borderline Clinical Depression</span>
                        <div>You responded in a way that indicates moderate depressive symptoms. In the rest of the results, we will tell you whether you meet the criteria for a depressive illness diagnosis. However, even if you don&apos;t, keep an eye on the symptoms listed. If they get any worse or persist for a prolonged period of time (weeks or months), you should consult a physician. It would be wise to talk about it to your doctor.</div>
                    </div>
                case '3':
                    return <div>
                        <span className="font-bold text-xl">Moderate Depressive</span>
                        <div>You responded in a way that indicates moderate depressive symptoms. In the rest of the results, we will tell you whether you meet the criteria for a depressive illness diagnosis. However, even if you don&apos;t, keep an eye on the symptoms listed. If they get any worse or persist for a prolonged period of time (weeks or months), you should consult a physician. It would be wise to talk about it to your doctor.</div>
                    </div>
                case '4':
                    return <div>
                        <span className="font-bold text-xl">Severe Depression</span>
                        <div>Severe depression- You responded in a way that indicates severe depressive symptoms. It is strongly recommended that you see your physician as soon as you can. Depression is treatable and the success rate is very high. You may feel now that every day is a struggle, but things WILL get better. After some time, facing another day will become easier and gradually, you will find joy again. Please, see a doctor; you really do not need to suffer this way. Remember, depression is a medical problem and it is not &#8222;just in your head&#8222;. It is not something you did, you are not being punished, and it is not your fault. You don&apos;t deserve to suffer, no matter how badly you feel about yourself right now. There is help, so please, go and get it.</div>
                    </div>
                case '5':
                    return <div>
                        <span className="font-bold text-xl">Extreme Depression</span>
                        <div>Extreme depression- You responded in a way that indicates severe depressive symptoms. It is strongly recommended that you see your physician as soon as you can. Depression is treatable and the success rate is very high. You may feel now that every day is a struggle, but things WILL get better. After some time, facing another day will become easier and gradually, you will find joy again. Please, see a doctor; you really do not need to suffer this way. Remember, depression is a medical problem and it is not &#8222;just in your head&#8222;. It is not something you did, you are not being punished, and it is not your fault. You don&apos;t deserve to suffer, no matter how badly you feel about yourself right now. There is help, so please, go and get it.</div>
                    </div>

                default:
                    return <>...</>
            }
        }
    }

    const percentScore = (score: string | null) => {
        if (score !== null) {
            const parsedScore = parseInt(score);
            const percent = Math.ceil(((parsedScore) / 88) * 100);
            return percent
        }
        return 0;
    }

    const closeTab = () => {
        window.opener = null;
        window.open("", "_self");
        window.close();
    };

    const percentBarColor = () => {
        if (beckType() === 'Anxiety') {
            switch (level) {
                case '0':
                    return 'bg-emerald-500'
                case '1':
                    return 'bg-orange-500'
                case '2':
                    return 'bg-red-500'
                default:
                    return 'bg-gray-500'
            }
        }
        switch (level) {
            case '0':
                return "bg-green-500";
            case '1':
                return "bg-pink-500";
            case '2':
                return "bg-yellow-500";
            case '3':
                return "bg-amber-500";
            case '4':
                return "bg-orange-500";
            case '5':
                return "bg-red-500";

            default:
                return 'bg-gray-500'
        }

    }
    return <>
        <main>
            <section className="shadow-lg rounded-md p-5">
                <button onClick={closeTab} className="hover:scale-110 transition duration-300 hover:bg-gray-200 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" /> </svg></button>
                <div className="text-xl font-bold">Snapshot Report</div>
                <div className="font-semibold">Overall {beckType()}: {score}</div>
                <div className="flex flex-row mt-2">
                    <div className="border-2 rounded-md w-44 h-5 bg-slate-400">
                        <div className={`rounded-md w-44 h-4 ${percentBarColor()}`} style={{ "width": `${percentScore(score)}%` }}></div>
                    </div>
                </div>
            </section>
            {/* <section className="m-5"> */}
            {/* </section> */}
            <section className="shadow-lg rounded-md p-5">
                <BeckDescription />
            </section>
        </main>
    </>
}