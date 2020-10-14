import React from "react";
import { Helmet } from "react-helmet-async";
function About() {
  return (
    <div className="about">
      <Helmet>
        <title>About the Author | Hibberd V. B. Kline, III</title>
        <meta
          name="description"
          content="Hibberd Van Buren Kline, III, Colonel USMCR (Ret) brings a variety
          of experiences and training to his writing of Civil War naval
          fiction. He is an honors graduate in History. . ."
        />
      </Helmet>
      <div className="about__cover">
        <div className="blurb">
          <h1>About the Author</h1>
          <p>
            Hibberd Van Buren Kline, III, Colonel USMCR (Ret) brings a variety
            of experiences and training to his writing of Civil War naval
            fiction. He is an honors graduate in History from Harvard College,
            where he was starting saber on the Freshman Fencing Team and
            founding President of the Harvard Polo Club. Hibberd earned his law
            degree from the University of Virginia and has been a member of the
            Missouri Bar since 1975. For most of his life he has raised and
            trained various breeds of horses and until the Gulf War continued
            the Morse family tradition going back to 1623 in America of raising
            Devon cattle first in Maryland and then in Missouri. He presently
            owns a farm in Centerview, Missouri.
          </p>
          <p>
            Colonel Kline served thirty years active and reserve, ashore and
            afloat, as an infantry officer and an intelligence officer in the
            United States Marine Corps, including active service during Vietnam
            and the Gulf War. He has held every level of command from rifle
            platoon through infantry battalion and has served as a principal
            staff officer at regimental and brigade levels. During 1991 – 1994,
            he directed the Reserve Course at the Marine Corps Command and Staff
            College at Quantico, Virginia, where he also served as a seminar
            leader and staff ride instructor 1986 - 1990.
          </p>
          <p>
            A life-long student of the American Civil War, Colonel Kline is a
            member of the Civil War Roundtable of Kansas City, served for six
            years as a board member of the Wornall – Majors Houses Museum, and
            is a docent at the Steamboat Arabia Museum. As Vice President at
            Wentworth Military Academy, he founded a Civil War Living History
            Program and a four week Civil War Living History Summer Camp that
            immersed the students in 19th Century life and concluded with
            participation in the Gettysburg re-enactment in Pennsylvania.
            Hibberd has given talks on various Civil War topics to The Vanguard
            Club, the Civil War Roundtable of Toronto, The Sons of Union
            Veterans, The Sons of Confederate Veterans, The Daughters of the
            American Revolution, and other organizations. He has been a Civil
            War re-enactor on-and-off since 1962, including participating as a
            Marine in the movie Gods and Generals. When he writes of amphibious
            landings from whaleboats or firing large caliber 19th Century naval
            guns, he actually has done so.
          </p>
          <p>Hibberd and his wife Christine live in Kansas City, Missouri.</p>
        </div>
        <img
          className="author-image"
          src="/Images/hibberd-van-buren-kline-iii-thumbnail.jpg"
          alt="Hibberd Van Buren Kline, III"
        />
      </div>
    </div>
  );
}
export default About;
