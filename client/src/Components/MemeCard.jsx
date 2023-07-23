import { BiSolidUpvote } from "react-icons/bi"

function MemeCard({ url }) {
  return (
    <div>
      <div class="card">
        <img alt="11985" src={url} style="width: 100%; height: 100%;" />
        <div class="extra content">
          <span class="right floated">
            <button class="ui mini circular basic icon button">
              <i class="exclamation small  icon"></i>Report
            </button>
          </span>
          <span>
            <button class="ui circular basic icon button">
              <BiSolidUpvote />
            </button>
            <button class="ui circular basic icon button">
              <i class="red angle double down icon"></i>
            </button>
            75
          </span>
        </div>
      </div>
    </div>
  )
}

export default MemeCard
