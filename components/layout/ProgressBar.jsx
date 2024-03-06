'use client';
import Progress from '@ramonak/react-progress-bar';

export default function ProgressBar({ percentage, skill }) {
  return (
    <div className="my-4">
      <h4 className="bg-gray-600 rounded-t-sm w-auto p-4 my-0 ">{skill}</h4>
      <Progress
        completed={percentage}
        className="w-full text-primary"
        bgColor={'#04acf1'}
        transitionDuration={'5s'}
        transitionTimingFunction={'linear'}
        animateOnRender={true}
        height={'30px'}
        borderRadius={'0px'}
      />
    </div>
  );
}
